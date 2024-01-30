import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "../slices/auth";
import { reducer as productReducer } from "../slices/productSlice";
export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});
