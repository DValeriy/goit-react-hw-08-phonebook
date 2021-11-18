import { configureStore } from "@reduxjs/toolkit";

import reducer from "./rootReducer";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: process.env.NODE_ENV !== "production",
});
