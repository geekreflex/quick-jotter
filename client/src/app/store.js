import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import notesReducer from '../features/notesSlice';
import actionsReducer from '../features/actionsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
    actions: actionsReducer,
  },
});
