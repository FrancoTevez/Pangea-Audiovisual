import { createSlice } from "@reduxjs/toolkit";
import en from "../leng-en";

const initialState = {
  leng: en
};

const idiomaSlice = createSlice({
  name: "leng",
  initialState,
  reducers: {
    SET_LENG(state, action) {
      state.leng = action.payload.leng
    }
  },
});
export const idiomaActions = idiomaSlice.actions;

export default idiomaSlice.reducer;
