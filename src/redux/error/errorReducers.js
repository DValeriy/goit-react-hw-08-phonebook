import { createReducer } from "@reduxjs/toolkit";
import {
  addContactError,
  getContactsError,
  removeContactError,
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
} from "../contacts/contactsActions";

const setError = (_, { payload }) => payload;
const resetError = (_, { payload }) => "";

const errorReducer = createReducer(null, {
  [getContactsError]: setError,
  [getContactsSuccess]: resetError,
  [addContactError]: setError,
  [addContactSuccess]: resetError,
  [removeContactError]: setError,
  [removeContactSuccess]: resetError,
});
export default errorReducer;
