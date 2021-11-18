// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
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

import reducerRoot from "./rootReducer";

const persistConfig = {
  key: "rootReducer",
  version: 1,
  storage,
  whitelist: ["contacts"],
};

const reducer = persistReducer(persistConfig, reducerRoot);

// ---------Pure redux-----------
// export const store = createStore(reducer, composeWithDevTools());
// ---------Pure redux-----------

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
  // devTools: process.env.NODE_ENV !== "development",
});
