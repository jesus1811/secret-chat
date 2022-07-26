import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default messageSlice;
export const { setMessage } = createSlice.actions;
