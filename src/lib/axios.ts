import config from "@/config";
import axios, { type AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  withCredentials: true,
  // It will set Cookie in browser
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

let isRefreshing = false;

let pendingQueue: {
  resolve: (value?: unknown) => void;
  reject: (value?: unknown) => void;
}[] = [];

const processQueue = (error: unknown) => {
  pendingQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });
  pendingQueue = [];
};

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Success!!");
    return response;
  },

  async (error) => {
    console.log("Request failed", error);

    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    console.log({ originalRequest });

    if (
      error.response.status === 500 &&
      error.response.data.message === "jwt expired" &&
      !originalRequest._retry
    ) {
      console.log("Your Token is Expired!");

      originalRequest._retry = true; // Mark the request as retried

      // If we are already refreshing the token, return a promise that resolves when the new token is obtained
      //* This ensures that all requests wait for the token to be refreshed
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(originalRequest))
          .catch((error) => {
            Promise.reject(error);
          });
      }
      // If we are not refreshing the token, set the flag to true
      isRefreshing = true;
      try {
        const res = await axiosInstance.post("/auth/refresh-token");
        console.log("new refresh token arrived", { res });

        processQueue(null); // Notify all pending requests that the token has been refreshed

        return axiosInstance(originalRequest); // Retry the original request for setting the access token
      } catch (error) {
        processQueue(error); // Reject all pending requests with the error
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    // For everything
    return Promise.reject(error);
  }
);
