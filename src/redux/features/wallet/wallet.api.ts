import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
    }),
    getUsersWallet: builder.query({
      query: (params) => ({
        url: `wallet/users-wallet/${params.email}`,
        method: "GET",
        params
      }),
    }),

    topUpWallet: builder.mutation({
      query: (payload) => ({
        url: "/wallet/top-up",
        method: "POST",
        data: payload,
      }),
    }),

    withdrawFromWallet: builder.mutation({
      query: (payload) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: payload,
      }),
    }),

    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/send-money",
        method: "POST",
        data: payload,
      }),
    }),
  }),
});

export const { useGetMyWalletQuery, useGetUsersWalletQuery, useTopUpWalletMutation, useWithdrawFromWalletMutation, useSendMoneyMutation } = walletApi;
