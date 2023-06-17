import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";
import { addContactsSuccess, deleteContactsSuccess, fetchContactsSucces, handlePending, handleRejected } from "./handlers";


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSucces)
      .addCase(addContact.fulfilled, addContactsSuccess)
      .addCase(deleteContact.fulfilled, deleteContactsSuccess)
      .addMatcher((action) => {
        action.type.endsWith('/pending')
      }, handlePending)
      .addMatcher((action) => {
        action.type.endsWith('/rejected')
      }, handleRejected)
  }
})


export const contactsReducer = contactsSlice.reducer



