import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../itemSlice";
import bagSlice from "../bagSlice";
import preBagSlice from "../preBagSlice";

const nikeStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag: bagSlice.reducer,
   preBag: preBagSlice.reducer,
  },
});

export default nikeStore;
