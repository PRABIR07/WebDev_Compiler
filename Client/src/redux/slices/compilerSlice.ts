import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  html: string;
  css: string;
  javascript: string;
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: InitialStateType = {
  html: "",
  css: "",
  javascript: "",
  currentLanguage: "html",
};
const compilerSlice = createSlice({
  name: "Compiler",
  initialState,
  reducers: {
    setCurrentLanguage: (
      state,
      action: PayloadAction<InitialStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;

export const { setCurrentLanguage } = compilerSlice.actions;
