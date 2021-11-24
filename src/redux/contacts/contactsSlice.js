import { createSlice } from "@reduxjs/toolkit";

import { getContacts, addContact, removeContact } from "./contactsThunk";

const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
};

const userContactBook = createSlice({
  name: "userContactBook",
  initialState,
  extraReducers: {
    [getContacts.pending]: (state, _) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: payload,
      isLoading: false,
    }),
    [getContacts.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [addContact.pending]: (state, _) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, payload],
      isLoading: false,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [removeContact.pending]: (state, _) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: state.contacts.filter(({ id }) => id !== payload),
      isLoading: true,
    }),
    [removeContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default userContactBook.reducer;
