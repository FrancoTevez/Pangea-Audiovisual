import { configureStore } from "@reduxjs/toolkit";
import idiomaSlice from "./idiomaSlice";

const store = configureStore({
  reducer: { idioma: idiomaSlice },
});

export default store;
