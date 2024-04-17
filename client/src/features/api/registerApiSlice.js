import { apiSlice } from "./apiSlice";
const REGISTER_URL = "/auth";

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${REGISTER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${REGISTER_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = registerApiSlice;
