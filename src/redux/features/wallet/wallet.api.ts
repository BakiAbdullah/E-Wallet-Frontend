import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWallet: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});
