import { createSlice } from "@reduxjs/toolkit";
import { ordersApi } from "../../mocks/orders";

const initialState = {
  order: [],
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    listOrders(state, action) {
      console.log("action");
      console.log(action.payload);
      if (action.payload) {
        state.order = [action.payload.data];
      }
    },
  },
});

export const { reducer } = slice;

export const createOrders = (data) => async () => {
  let result = await ordersApi.createOrders(data);
  console.log("result in slice", result);
  if (result) {
    return result;
  } else {
    return false;
  }
};

export const getSingleOrder = (data) => async () => {
  console.log("data for single order", data);
  const result = await ordersApi.getSingleOrder(data);
  if (result) {
    // await dispatch(slice.actions.addToCart(result.data));
    return result;
  } else {
    return false;
  }
};

export const listOrders = (page, limit, id) => async (dispatch) => {
  let result = await ordersApi.listOrders(page, limit, id);
  // console.log("order data in slice", data);
  if (result) {
    await dispatch(slice.actions.listOrders(result.data));
    return result;
  } else {
    return false;
  }
};
