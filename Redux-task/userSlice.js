import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "name",
  initialState: {
    name: "Header",
    name1: "footer"
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.name1 = action.payload.name;
    }
  }
});
export const { update } = userSlice.actions;
export default userSlice.reducer;