import { configureStore } from "@reduxjs/toolkit";
import questions from "../slices/questions";
import answers from "../slices/answers";

const store = configureStore({
  reducer: {
    questions,
    answers,
  },
});

export default store;
