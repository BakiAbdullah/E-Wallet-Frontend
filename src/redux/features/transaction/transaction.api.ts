import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTransactions: builder.query({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
    }),
    getMyTransactions: builder.query({
      query: () => ({
        url: "/transaction/history/me",
        method: "GET",
      }),
    }),
    getSingleUserTransactions: builder.query({
      query: (walletId) => ({
        url: `/transaction/history/${walletId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
  useGetMyTransactionsQuery,
  useGetSingleUserTransactionsQuery,
} = transactionApi;
