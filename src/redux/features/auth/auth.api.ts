import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
        // body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    // Update user profile
    updateUserProfile: builder.mutation({
      query: (credentials) => ({
        url: "/auth/update-profile",
        method: "PATCH",
        data: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserProfileMutation,
} = authApi;
