import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import notesReducer from '../features/notesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
  },
});
