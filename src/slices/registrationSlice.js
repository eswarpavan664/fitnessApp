import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectUid } from './authSlice';
import { baseUrl } from './_base';

const initialState = null;

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegistration: (state, action) => action.payload
  }
});

export const { setRegistration } = registrationSlice.actions;

// Thunk for fetching
export const fetchRegistrations = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `${baseUrl}/fitness/${selectUid(getState())}/registrations`
    );
    const res = response.data;
    dispatch(setRegistration(res));
  } catch (error) {
    console.log(error);
  }
};

// Thunk for updating
export const updateRegistrations = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `${baseUrl}/fitness/${selectUid(getState())}/registrations`,
      data
    );
    const res = response.data;
    if (res) {
      dispatch(fetchRegistrations());
    }
  } catch (error) {
    console.log(error);
  }
};

export default registrationSlice.reducer;
