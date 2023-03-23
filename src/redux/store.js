import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';
import modalReducer from './modal/modalSlice';
import profileReducer from './profile/profileSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    modal: modalReducer,
    profile: profileReducer,
  },
});

export default store;
