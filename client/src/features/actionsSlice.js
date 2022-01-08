import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newNoteModal: false,
  noteOptions: false,
  sltColor: null,
  theme: 'dark',
};

export const actionsSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    toggleNoteModal(state) {
      state.newNoteModal = !state.newNoteModal;
    },
    toggleNoteOptions(state) {
      state.noteOptions = !state.noteOptions;
    },
    setSelectedColor(state, action) {
      state.sltColor = action.payload;
    },
    clearSelectedColor(state) {
      state.sltColor = null;
    },
    setThemeMode(state) {
      const key = 'quick-jotter-theme';
      const mode = window.localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : null;

      if (mode) {
        state.theme = mode;
      } else {
        state.theme = 'dark';
      }
    },
  },
});

export const {
  toggleNoteModal,
  toggleNoteOptions,
  setThemeMode,
  setSelectedColor,
  clearSelectedColor,
} = actionsSlice.actions;
export default actionsSlice.reducer;
