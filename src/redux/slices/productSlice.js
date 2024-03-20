import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../mocks/products";

const initialState = {
  product: [],
  pagination:{},
  singleProduct: {},
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action) {
      let data = [...action.payload.data];
      state.product = data;
      state.pagination = action.payload.paginator
    },
    getSingleProduct(state, action) {
      let data = { ...action.payload };
      state.singleProduct = data;
    },
  },
});

export const getProduct =
  (page, limit = 12, filter) =>
  async (dispatch) => {
    const result = await productApi.getProduct(page, limit, filter);
    if (result) {
      await dispatch(slice.actions.getProduct(result.data));
      return true;
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
