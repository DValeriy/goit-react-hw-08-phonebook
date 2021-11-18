import { createAction } from "@reduxjs/toolkit";

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
