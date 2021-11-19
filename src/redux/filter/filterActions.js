import { createAction } from "@reduxjs/toolkit";

import { CHANGE_Filter } from "./filterConstants";

export const changeFilter = createAction(CHANGE_Filter);
