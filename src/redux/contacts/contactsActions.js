import { createAction } from "@reduxjs/toolkit";

import { ADD_Contact, GET_Contacts, REMOVE_Contact } from "./contactsConstants";

// ---------Pure redux-----------
// export const addContact = (contact) => ({
//   type: ADD_Contact,
//   payload: contact,
// });

// export const removeContact = (id) => ({
//   type: REMOVE_Contact,
//   payload: id,
// });

// export const getContacts = (contacts) => ({
//   type: GET_Contacts,
//   payload: contacts,
// });
// ---------Pure redux-----------

export const addContact = createAction(ADD_Contact);

export const removeContact = createAction(REMOVE_Contact);

export const getContacts = createAction(GET_Contacts);
