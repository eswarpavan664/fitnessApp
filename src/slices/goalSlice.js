import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectUid } from './authSlice';
import { baseUrl } from './_base';

const initialState = null;

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    setGoal: (state, action) => action.payload
  }
});

export const { setGoal } = goalSlice.actions;

// Thunk for fetching goal data
export const fetchGoal = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `${baseUrl}/fitness/${selectUid(getState())}/goal`
    );
    const goalData = response.data;
    dispatch(setGoal(goalData));
  } catch (error) {
    console.log(error);
  }
};

// Thunk for updating goal data
export const updateGoal = (goalData) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `${baseUrl}/fitness/${selectUid(getState())}/goal`,
      goalData
    );
    const updatedGoal = response.data;
    console.log('updatedGoal', updatedGoal);
    dispatch(fetchGoal());
  } catch (error) {
    console.log(error);
  }
};

export default goalSlice.reducer;
