import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  authUserApi,
  loginUserApi,
  logoutUserApi,
  currentUserApi,
} from "../../shared/services/Api";

export const userRegister = createAsyncThunk(
  "userAuth/userRegister",
  async (user, { rejectWithValue }) => {
    try {
      const data = await authUserApi(user);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userLogin = createAsyncThunk(
  "userAuth/userLogin",
  async (user, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(user);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userLogout = createAsyncThunk(
  "userAuth/userLogout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUserApi();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userCurrent = createAsyncThunk(
  "userAuth/userCurrent",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (!state.userAuth.token) {
      return;
      // return rejectWithValue(null);
    }
    try {
      const data = await currentUserApi(state.userAuth.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
