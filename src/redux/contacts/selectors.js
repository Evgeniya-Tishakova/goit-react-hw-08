import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectIsLoading = (state) => {
  return state.contacts.loading;
};

export const selectIsError = (state) => {
  return state.contacts.error;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactsFilter = "") => {
    const normalizedFilter = contactsFilter.toLowerCase().trim();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  }
);
