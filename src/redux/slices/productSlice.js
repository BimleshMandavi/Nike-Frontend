import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../mocks/products";

const initialState = {
  product: [],
  singleProduct: {},
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action) {
      let data = [...action.payload.data];
      state.product = data;
    },
    getSingleProduct(state, action) {
      let data = { ...action.payload };
      state.singleProduct = data;
    },
  },
});

export const getProducts =
  (page, limit = 12, filter) =>
  async (dispatch) => {
    const result = await productApi.getProduct(page, limit, filter);
    if (result) {
      await dispatch(slice.actions.getProduct(result.data));
    } else {
      return false;
    }
  };

export const getSingleProduct = (id) => async (dispatch) => {
  const result = await productApi.getSingleProduct(id);
  if (result) {
    await dispatch(slice.actions.getSingleProduct(result.data));
    return result;
  } else {
    return false;
  }
};

export const { reducer } = slice;
