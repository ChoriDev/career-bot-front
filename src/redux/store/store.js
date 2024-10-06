import { configureStore } from "@reduxjs/toolkit";
import sentences from "../slices/sentences";

const store = configureStore({
  reducer: {
    sentences,
  },
});

export default store;
