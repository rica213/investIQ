import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isSearchByName: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => ({
      ...state,
      isOpen: true,
    }),
    closeModal: (state) => ({
      ...state,
      isOpen: false,
    }),
    searchByName: (state, action) => {
      const newState = { ...state };
      if (action.payload === 'name') {
        newState.isSearchByName = true;
      } else { newState.isSearchByName = false; }
      return newState;
    },
  },
});

export const { openModal, closeModal, searchByName } = modalSlice.actions;
export default modalSlice.reducer;
