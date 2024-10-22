import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../mocks/auth";

const initialState = {
  user: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser(state, action) {
      let data = { ...action.payload.data };
      state.user = data;
    },

    logoutUser(state) {
      state.user = {};
    },
  },
});

export const { reducer } = slice;

export const getUser = () => async (dispatch) => {
  const result = await authApi.getUser();

  if (result) {
    await dispatch(slice.actions.getUser(result));
    return true;
  } else {
    return false;
  }
};

export const register = (data) => async () => {
  const result = await authApi.register(data);
  if (result) {
    return true;
  } else {
    return false;
  }
};

export const login = (data) => async () => {
  const result = await authApi.login(data);
  if (result) {
    return result.data;
  } else {
    return false;
  }
};

export const logout = () => async (dispatch) => {
  await dispatch(slice.actions.logoutUser());
  return true;
};

export const updateUser = (id, data) => async () => {
  console.log("data in slice :", data);
  let result = await authApi.updateUser(id, data);
  if (result) {
    return result;
  } else {
    return false;
  }
};
