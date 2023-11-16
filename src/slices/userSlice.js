import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectUid } from './authSlice';
import { baseUrl } from './_base';

const initialState = {
  details: {
    user: null,
    allUsers: []
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.details.user = action.payload;
    },
    getAllUsers: (state, action) => {
      state.details.allUsers = action.payload;
    }
  }
});

export const { setUser, getAllUsers } = userSlice.actions;

// Thunk for fetching user data
export const fetchUser = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `${baseUrl}/fitness/${selectUid(getState())}/user`
    );
    const user = response.data;
    dispatch(setUser(user));
  } catch (error) {
    console.log(error);
  }
};

// Thunk for updating user data
export const updateUser = (userData) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `${baseUrl}/fitness/${selectUid(getState())}/user`,
      userData
    );
    const updatedUser = response.data;
    dispatch(setUser(updatedUser));
  } catch (error) {
    console.log(error);
  }
};

// Thunk only for Admin login
export const fetchAllUsers = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `${baseUrl}/fitness/${selectUid(getState())}/allusers`
    );
    console.log(response);
    dispatch(getAllUsers(response.data));
  } catch (err) {
    console.log(err);
  }
};

// Thunk only for Admin login
export const deleteUser = (userId) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/fitness/${selectUid(getState())}/delete/${userId}`
    );
    console.log(response);
    dispatch(fetchAllUsers());
  } catch (err) {
    console.log(err);
  }
};

export default userSlice.reducer;
