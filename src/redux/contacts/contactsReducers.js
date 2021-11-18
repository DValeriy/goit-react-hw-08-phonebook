import { createReducer } from "@reduxjs/toolkit";

import {
  getContactsSuccess,
  addContactSuccess,
  removeContactSuccess,
} from "./contactsActions";
import { ADD_Contact, GET_Contacts, REMOVE_Contact } from "./contactsConstants";

export const contactsReducer = createReducer([], {
  [ADD_Contact]: (state, { payload }) => [...state, payload],
  [GET_Contacts]: (state, { payload }) => [...payload],
  [REMOVE_Contact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [getContactsSuccess]: (_, { contacts }) => contacts,
  [addContactSuccess]: (state, { contact }) => [...state, contact],
  [removeContactSuccess]: (state, { index }) => [...state.splice(index, 0)],
});

// const contactsReducer = createReducer([], {
//   [addContactsSuccess]: (state, { payload }) => [...state, payload],
//   [getContactsSuccess]: (_, { payload }) => payload,
//   [removeContactsSuccess]: (state, { payload }) =>
//     state.filter((item) => item.id !== payload),
// });

export default contactsReducer;
