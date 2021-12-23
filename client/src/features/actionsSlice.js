import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newNoteModal: false,
};

export const actionsSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    toggleNoteModal(state) {
      state.newNoteModal = !state.newNoteModal;
    },
  },
});

export const { toggleNoteModal } = actionsSlice.actions;
export default actionsSlice.reducer;
