import { createSlice } from "@reduxjs/toolkit";

const answers = createSlice({
  name: "answers",
  initialState: [],
  reducers: {
    save: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { save, clear } = answers.actions;
export default answers.reducer;
