import { configureStore } from "@reduxjs/toolkit";
import { origenSlice, otroSlice } from "./misSlice";

export default configureStore({
  // Configure the Redux store
  // This is where you can add your reducers and middleware
  reducer: {
    // Here you can add your reducers/slices
    unValor: origenSlice.reducer,
    otroValor: otroSlice.reducer,
  },
});
