import { createSelector } from "@reduxjs/toolkit";

export const tokenSelector = ({ userAuth }) => userAuth.token;
export const userSelector = ({ userAuth }) => userAuth.user;
export const userEmailSelector = ({ userAuth }) => userAuth.user.email;
export const userNameSelector = ({ userAuth }) => userAuth.user.name;
export const userErrorSelector = ({ userAuth }) => userAuth.isError;
export const userIsLoadingSelector = ({ userAuth }) => userAuth.isLoading;

export const isUserLoginSelector = createSelector(
  [tokenSelector, userSelector],
  (token, user) => {
    return token && user ? true : false;
  }
);

export const contactsSelector = ({ contacts }) => contacts.list.contacts;
export const filterSelector = ({ contacts }) => contacts.filter;
export const contactsErrorSelector = ({ contacts }) => contacts.list.error;
export const contactsIsLoadingSelector = ({ contacts }) =>
  contacts.list.isLoading;

export const filteredContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }
);
