import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { KEY } from '../utils/constants';

const initialState = {
  user: {},
  status: 'idle',
  isAuth: false,
  error: null,
};

export const googleAuth = createAsyncThunk(
  'user/googleAuth',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/auth/google`,
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfoFromStorage(state) {
      const key = `${KEY}userInfo`;
      const userInfo = localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : null;

      if (userInfo) {
        state.isAuth = true;
        state.user = userInfo;
      }
    },
    logoutUser() {
      const userKey = `${KEY}userInfo`;
      const tokenKey = `${KEY}token`;
      localStorage.removeItem(userKey);
      localStorage.removeItem(tokenKey);
      window.location.href = '/';
    },
  },
  extraReducers: {
    // google auth

    [googleAuth.pending]: (state) => {
      state.status = 'idle';
    },
    [googleAuth.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
      localStorage.setItem(KEY + 'userInfo', JSON.stringify(action.payload));
      localStorage.setItem(KEY + 'token', JSON.stringify(action.payload.token));
      window.location.href = '/';
      console.log(action.payload);
    },
    [googleAuth.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const { logoutUser, getUserInfoFromStorage } = userSlice.actions;
export default userSlice.reducer;
