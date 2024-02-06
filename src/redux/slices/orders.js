import { createSlice } from "@reduxjs/toolkit";
import { ordersApi } from "../../mocks/orders";

const initialState = {
  order: [],
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const { reducer } = slice;

export const createOrders = (data) => async () => {
  let result = await ordersApi.createOrders(data);
  if (result) {
    return result;
  } else {
    return false;
  }
};
