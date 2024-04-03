import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";
import { api } from "./slices/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    compiler: compilerSlice,
  },
  middleware: (getDefaultMiddleare) =>
    getDefaultMiddleare().concat(api.middleware),
});

export type Rootstate = ReturnType<typeof store.getState>;
