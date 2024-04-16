import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "../slices/auth";
import { reducer as productReducer } from "../slices/productSlice";
import { reducer as cartReducer } from "../slices/cart";
import { reducer as orderReducer } from "../slices/orders";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});
