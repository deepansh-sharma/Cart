import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    add: (state, actions) => {
      state.push(actions.payload);
    },
  },
});

export const { remove, add } = cartSlice.actions;
export default cartSlice.reducer;
