import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "../contacts/contactsActions";

const loaderReducer = createReducer(false, {
  [getContactsRequest]: (_, action) => true,
  [getContactsSuccess]: (_, action) => false,
  [getContactsError]: (_, action) => false,
  [addContactRequest]: (_, action) => true,
  [addContactSuccess]: (_, action) => false,
  [addContactError]: (_, action) => false,
  [removeContactRequest]: (_, action) => true,
  [removeContactSuccess]: (_, action) => false,
  [removeContactError]: (_, action) => false,
});

export default loaderReducer;
