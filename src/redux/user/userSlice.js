import { createSlice } from "@reduxjs/toolkit";

import { userRegister, userLogin, userLogout, userCurrent } from "./userThunk";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  error: null,
  isLoading: false,
};

const userAuth = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [userRegister.pending]: (state, _) => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [userRegister.fulfilled]: (state, { payload: { user, token } }) => ({
      ...state,
      user,
      token,
      isLoading: false,
    }),
    [userRegister.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [userLogin.pending]: (state, _) => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [userLogin.fulfilled]: (state, { payload: { user, token } }) => {
      return {
        ...state,
        user,
        token,
        isLoading: false,
      };
    },
    [userLogin.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },

    [userLogout.pending]: (state, _) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [userLogout.fulfilled]: (state, _) => ({ ...initialState }),
    [userLogout.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [userCurrent.pending]: (state, _) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [userCurrent.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload,
      isLoading: false,
    }),
    [userCurrent.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default userAuth.reducer;
