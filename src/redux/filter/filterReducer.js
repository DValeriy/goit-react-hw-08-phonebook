import { createReducer } from "@reduxjs/toolkit";

import { CHANGE_Filter } from "./filterConstants";

export const filterReducer = createReducer("", {
  [CHANGE_Filter]: (state, { payload }) => payload,
});
