// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://47.121.180.10/:3000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getUser: builder.query({
      query: () => ({
        url: `/auth/user`,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: `/auth/logout`,
        method: "POST",
        body,
      }),
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: `post/add`,
        method: "POST",
        body,
      }),
    }),

    getPost: builder.query({
      query: () => ({
        url: `post/allPost`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useAddPostMutation,
  useGetPostQuery,
} = pokemonApi;
