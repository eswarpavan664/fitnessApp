import { createSlice, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

// Check if the user is already logged in
const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  isLoading: false,
  error: null
};

const resetUser = (state) => {
  state.user = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;

      // Store login information in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('isLoggedIn', 'true');
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;

      // Clear login information from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
    },
    logout(state) {
      resetUser(state);

      // Clear login information from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
    },
    signupFailure(state, action) {
      resetUser(state);
      state.error = action.payload;
    },
    clearErrorState(state) {
      state.error = '';
    }
  }
});

export const selectUid = createSelector(
  (state) => state.auth.user,
  (user) => user?.uid || null
);

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupFailure,
  clearErrorState
} = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/fitness/login',
      credentials
    );
    const user = response.data;
    dispatch(loginSuccess(user));
  } catch (err) {
    console.log(err);
    let msg = 'Failed to login';
    if (err && err.response && err.response.data && err.response.data.error) {
      msg = err.response.data.error;
    }
    dispatch(loginFailure(msg));
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/fitness/signup',
      userData
    );
    const user = response.data;
    dispatch(loginSuccess(user));
  } catch (err) {
    console.log(err);
    let msg = 'Failed to Signup';
    if (err && err.response && err.response.data && err.response.data.error) {
      msg = err.response.data.error;
    }
    dispatch(signupFailure(msg));
  }
};

export default authSlice.reducer;
