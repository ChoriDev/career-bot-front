import { createSlice } from "@reduxjs/toolkit";

const sentences = createSlice({
  name: "sentences",
  initialState: [],
  reducers: {
    save: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { save, clear } = sentences.actions;
export default sentences.reducer;
