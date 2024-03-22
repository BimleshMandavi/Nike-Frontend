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
    deleteCart(state) {
      state.cart = [];
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
  (page, limit = "10", id) =>
  async (dispatch) => {
    const result = await cartApi.listCart(page, limit, id);
    if (result) {
      // console.log("result in  cart slice",result)
      await dispatch(slice.actions.listCart(result.data));
      // console.log("object")
      return result;
    } else {
      return false;
    }
  };

export const deleteCart = (id) => async () => {
  const result = await cartApi.deleteCart(id);
  if (result) {
    console.log("result in delete cart", result);
    // await dispatch(slice.actions.deleteCart(result.data));

    return result;
  } else {
    return false;
  }
};

export const updateCart = (id,data) => async () => {
  const result = await cartApi.updateCart(id,data);
  if (result) {
    console.log("upadate cart result", result);
    return result;
  }
};
