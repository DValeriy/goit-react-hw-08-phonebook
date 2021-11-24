import { createReducer } from "@reduxjs/toolkit";

import { CHANGE_Filter } from "./filterConstants";
import { changeFilter } from "./filterActions";

const filterReducer = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});
export default filterReducer;
