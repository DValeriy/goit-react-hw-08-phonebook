import { createReducer } from "@reduxjs/toolkit";

import { ADD_Contact, GET_Contacts, REMOVE_Contact } from "./contactsConstants";

// ---------Pure redux-----------
// export const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_Contact:
//       return [...state, payload];
//     case REMOVE_Contact:
//       return state.filter(({ id }) => id !== payload);
//     case GET_Contacts:
//       return [...payload];
//     default:
//       return state;
//   }
// };
// ---------Pure redux-----------

export const contactsReducer = createReducer([], {
  [ADD_Contact]: (state, { payload }) => [...state, payload],
  [GET_Contacts]: (state, { payload }) => [...payload],
  [REMOVE_Contact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
