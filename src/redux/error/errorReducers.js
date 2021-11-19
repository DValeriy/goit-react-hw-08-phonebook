import { createReducer } from "@reduxjs/toolkit";
import {
  addContactError,
  getContactsError,
  removeContactError,
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
} from "../contacts/contactsActions";

const errorReducer = createReducer(null, {
  [getContactsError]: (_, { payload }) => payload,
  [getContactsSuccess]: (_, { payload }) => "",
  [addContactError]: (_, { payload }) => payload,
  [addContactSuccess]: (_, { payload }) => "",
  [removeContactError]: (_, { payload }) => payload,
  [removeContactSuccess]: (_, { payload }) => "",
});
export default errorReducer;
