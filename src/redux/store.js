import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userContact from "./contacts/contactsSlice";

import filterReducer from "../redux/filter/filterReducer";
import userContactBookReducer from "./user/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["token"],
};
const userAutPersistReducer = persistReducer(
  persistConfig,
  userContactBookReducer
);

const userContactReducer = combineReducers({
  list: userContact,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: userContactReducer,
  userAuth: userAutPersistReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
