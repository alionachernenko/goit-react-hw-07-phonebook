import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  list: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchContacts.rejected]: onRejected,

    [addContact.pending]: onPending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.list.unshift(action.payload);
    },
    [addContact.rejected]: onRejected,

    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const index = state.list.findIndex(({ id }) => id === action.payload.id);
      state.list.splice(index, 1);
    },
    [deleteContact.rejected]: onRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
