import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript";
}

const initialState: InitialStateType = {
  fullCode: {
    html: "",
    css: "",
    javascript: "",
  },

  currentLanguage: "html",
};
const compilerSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    setCurrentLanguage: (
      state,
      action: PayloadAction<InitialStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },

    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;

export const { setCurrentLanguage, updateCodeValue } = compilerSlice.actions;
