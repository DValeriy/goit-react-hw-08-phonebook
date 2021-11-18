import { createReducer } from "@reduxjs/toolkit";

import { CHANGE_Filter } from "./filterConstants";

// ---------Pure redux-----------
// export const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case CHANGE_Filter:
//       return payload;
//     default:
//       return state;
//   }
// };
// ---------Pure redux-----------

export const filterReducer = createReducer("", {
  [CHANGE_Filter]: (state, { payload }) => payload,
});
