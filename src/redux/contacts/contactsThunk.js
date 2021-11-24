import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactsApi,
  getContactsApi,
  removeContactsApi,
} from "../../shared/services/Api";

export const getContacts = createAsyncThunk(
  "contacts/getcontacts",
  async (token, { getState, rejectWithValue }) => {
    try {
      const state = await getState();
      const data = await getContactsApi(state.userAuth.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { getState, rejectWithValue }) => {
    try {
      const state = await getState();
      const data = await addContactsApi(contact, state.userAuth.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (contactId, { getState, rejectWithValue }) => {
    try {
      const state = await getState();
      const data = await removeContactsApi(contactId, state.userAuth.token);
      return contactId;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
