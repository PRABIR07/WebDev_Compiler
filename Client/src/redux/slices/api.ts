import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InitialStateType } from "./compilerSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    saveCode: builder.mutation<
      { url: string; status: string },
      InitialStateType["fullCode"]
    >({
      query: (fullCode) => ({
        url: "/compiler/save",
        method: "POST",
        body: fullCode,
      }),
    }),

    loadCode: builder.mutation<
      { fullCode: InitialStateType["fullCode"] },
      { urlId: string }
    >({
      query: (body) => ({
        url: "/compiler/load",
        method: "POST",
        body: body,
      }),
    }),
    login: builder.mutation<userInfoType, { userId: string; password: string }>(
      {
        query: (body) => ({
          url: "/user/login",
          method: "POST",
          body: body,
        }),
      }
    ),
  }),
});

export const { useSaveCodeMutation, useLoadCodeMutation, useLoginMutation } =
  api;
