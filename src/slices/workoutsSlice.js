import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectUid } from './authSlice';
import { baseUrl } from './_base';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

export const fetchWorkouts = createAsyncThunk(
  'workouts/fetchWorkouts',
  async (_, { getState }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/fitness/${selectUid(getState())}/workouts`
      );
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

export const addWorkout = createAsyncThunk(
  'workouts/addWorkout',
  async (workoutData, { getState, dispatch }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/fitness/${selectUid(getState())}/workout`,
        workoutData
      );
      console.log('response ==>', response);
      //  dispatch(setWorkOut(response.data));
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

export const deleteWorkout = createAsyncThunk(
  'workouts/deleteWorkout',
  async (workoutData, { getState, dispatch }) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/fitness/${selectUid(getState())}/workout/${workoutData.id}`,
        workoutData
      );
      console.log('response ==>', response);
      //  dispatch(setWorkOut(response.data));
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    setWorkOut: (state, action) => {
      console.log('action Reducer ==>', action);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkouts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('action ==>', action);
        state.data = action.payload;
      })
      .addCase(fetchWorkouts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addWorkout.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        // state.data.push(action.payload);
        console.log('action.payload =>', action.payload);
      });
  }
});

export const { setWorkOut } = workoutsSlice.actions;

export default workoutsSlice.reducer;
