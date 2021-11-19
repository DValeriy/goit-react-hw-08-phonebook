import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = (state) => state.contacts;
export const filterSelector = (state) => state.filter;
export const isErrorSelector = (state) => state.isError;
export const isLoadingSelector = (state) => state.isLoading;

export const filteredContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }
);
