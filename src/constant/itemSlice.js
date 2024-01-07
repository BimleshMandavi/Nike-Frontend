import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "./store/data/data.js";

const itemSlice = createSlice({
  name: "item",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemSlice.actions;

export default itemSlice;
