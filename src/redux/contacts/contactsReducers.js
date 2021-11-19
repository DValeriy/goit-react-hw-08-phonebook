import { createReducer } from "@reduxjs/toolkit";

import {
  getContactsSuccess,
  addContactSuccess,
  removeContactSuccess,
} from "./contactsActions";

export const contactsReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => {
    return payload;
  },
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default contactsReducer;
