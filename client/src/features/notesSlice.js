import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { token } from '../utils/token';

const initialState = {
  notes: [],
  note: {},
  status: 'idle',
  error: null,
};

export const createNote = createAsyncThunk(
  'notes/createNote',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/api/notes`,
        payload,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getNotes = createAsyncThunk('notes/getNotes', async (thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`${BASE_URL}/api/notes`, config);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
});

export const updateNoteColor = createAsyncThunk(
  'notes/updateNoteColor',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/api/notes/${payload.noteId}/color`,
        payload,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setSelectedNote(state, action) {
      state.note = action.payload;
    },
    switchNoteColor(state, action) {
      const { noteId, color } = action.payload;
      state.note.color = color;
      const existingNote = state.notes.find((note) => note._id === noteId);

      if (existingNote) {
        existingNote.color = color;
      }
    },
  },
  extraReducers: {
    // create note
    [createNote.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [createNote.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.notes.unshift(action.payload);
      state.error = null;
    },
    [createNote.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },

    // get notes
    [getNotes.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getNotes.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.notes = action.payload;
      state.error = null;
    },
    [getNotes.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const { setSelectedNote, switchNoteColor } = notesSlice.actions;
export default notesSlice.reducer;
