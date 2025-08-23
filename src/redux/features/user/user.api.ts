import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register User and Agent via Dynamic endpoints based on roles
    register: builder.mutation({
      query: ({ role, ...payload }) => {
        const url =
          role === "AGENT" ? "/user/register-agent" : "/user/register";

        return {
          url,
          method: "POST",
          data: payload,
        };
      },
    }),

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
  useRegisterMutation,
  useGetUserProfileQuery,
  useGetAllAgentsQuery,
  useGetAllUsersQuery,
} = userApi;
