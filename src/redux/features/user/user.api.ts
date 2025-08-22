import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all users
    getAllUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    // Get all agents
    getAllAgents: builder.query({
      query: () => ({
        url: "/user/agents",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    // Get user profile
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetAllAgentsQuery,
  useGetAllUsersQuery,
} = userApi;
