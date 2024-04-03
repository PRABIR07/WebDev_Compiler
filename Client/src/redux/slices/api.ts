import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InitialStateType } from "./compilerSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
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
  }),
});

export const { useSaveCodeMutation } = api;
