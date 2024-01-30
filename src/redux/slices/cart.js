import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../mocks/cart";

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
});

export const createCart = (data) => async () => {
  const result = await cartApi.createCart(data);
  if (result) {
    // await dispatch(slice.actions.addToCart(result.data));
    return result;
  } else {
    return false;
  }
};


export const getCart = (data) => async () => {
  const result = await cartApi.getCart(data);
  if (result) {
    // await dispatch(slice.actions.addToCart(result.data));
    return result;
  } else {
    return false;
  }
};

export const { reducer } = slice;
