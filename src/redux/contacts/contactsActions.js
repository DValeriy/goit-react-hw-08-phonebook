import { createAction } from "@reduxjs/toolkit";

import { ADD_Contact, GET_Contacts, REMOVE_Contact } from "./contactsConstants";

export const addContact = createAction(ADD_Contact);

export const removeContact = createAction(REMOVE_Contact);

export const getContacts = createAction(GET_Contacts);

export const getContactsRequest = createAction("Contacts/getContactssRequest");
export const getContactsSuccess = createAction("Contacts/getContactssSuccess");
export const getContactsError = createAction("Contacts/getContactssError");

export const addContactRequest = createAction("Contacts/addContactsRequest");
export const addContactSuccess = createAction("Contacts/addContactsSuccess");
export const addContactError = createAction("Contacts/addContactsError");

export const removeContactRequest = createAction(
  "Contacts/removeContactsRequest"
);
export const removeContactSuccess = createAction(
  "Contacts/removeContactsSuccess"
);
export const removeContactError = createAction("Contacts/removeContactsError");
