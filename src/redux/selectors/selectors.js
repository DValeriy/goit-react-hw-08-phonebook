import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = (state) => state.contacts;
export const filterSelector = (state) => state.filter;

// --------without memo selector-------------
// export const filteredContactsSelector = (state) => {
//   const contacts = contactsSelector(state);
//   const filter = filterSelector(state);
//   return filter
//     ? contacts.filter(({ name }) => {
//         return name.toLowerCase().includes(filter.toLowerCase());
//       })
//     : contacts;
// };
// --------without memo selector-------------

export const filteredContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return filter
      ? contacts.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;
  }
);
