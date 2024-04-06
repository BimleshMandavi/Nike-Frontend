import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../mocks/cart";

const initialState = {
  cart: [],
  cartsItemcount: {},
};
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    listCart(state, action) {
      console.log("action");
      console.log(action.payload);
      if (action.payload) {
        state.cart = [...action.payload.data];
        state.cartsItemcount = { ...action.payload.paginator };
      }
    },
    deleteCart(state, action) {
      let id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.cartsItemcount.itemCount = state.cartsPaginator?.itemCount - 1;
    },
  },
});

export const { reducer } = slice;

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
export const listCart =
  (page, limit = "12", id) =>
  async (dispatch) => {
    const result = await cartApi.listCart(page, limit, id);
    if (result) {
      await dispatch(slice.actions.listCart(result.data));
      return result;
    } else {
      return false;
    }
  };

export const deleteCart = (id) => async (dispatch) => {
  const result = await cartApi.deleteCart(id);
  if (result) {
    console.log("result in delete cart", result);
    await dispatch(slice.actions.deleteCart(id));
    return result;
  } else {
    return false;
  }
};

export const updateCart = (id, data) => async () => {
  const result = await cartApi.updateCart(id, data);
  if (result) {
    // await dispatch(slice.actions.updateCart(result.data));
    return result;
  }
};
