import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "config",
  initialState: {
    configLang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.configLang = action.payload;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;
