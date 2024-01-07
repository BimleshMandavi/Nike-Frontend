import { createSlice } from "@reduxjs/toolkit";

const preBagSlice = createSlice({
  name: "preBag",
  initialState: [],
  reducers: {
    addToPreBag: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const preBagActions = preBagSlice.actions;

export default preBagSlice;
