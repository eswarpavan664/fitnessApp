import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'slices/authSlice';
import userReducer from 'slices/userSlice';
import goalReducer from 'slices/goalSlice';
import workoutsReducer from 'slices/workoutsSlice';
import registrationReducer from 'slices/registrationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    goal: goalReducer,
    workouts: workoutsReducer,
    registrations: registrationReducer
  }
});

export default store;
