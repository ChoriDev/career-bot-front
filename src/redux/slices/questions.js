import { createSlice } from "@reduxjs/toolkit";

const questions = createSlice({
  name: "questions",
  initialState: [],
  reducers: {
    save: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { save, clear } = questions.actions;
export default questions.reducer;
