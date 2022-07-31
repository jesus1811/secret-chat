import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("user")) || {};
  return {};
};
const initialState = { value: local() };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;