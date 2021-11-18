import { createAction } from "@reduxjs/toolkit";

import { CHANGE_Filter } from "./filterConstants";

// ---------Pure redux-----------
// export const changeFilter = (value) => ({
//   type: CHANGE_Filter,
//   payload: value,
// });
// ---------Pure redux-----------

export const changeFilter = createAction(CHANGE_Filter);
