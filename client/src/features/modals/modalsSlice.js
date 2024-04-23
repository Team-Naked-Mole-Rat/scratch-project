import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginSignupModal: {isOpen: false},
  addPlantModal: {isOpen: false},
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal(state, action) {
      const { modalId } = action.payload; 
      console.log(state[modalId])
      if (state[modalId]) {
        state[modalId].isOpen = true;
      }
    },
    closeModal(state, action) {
      const { modalId } = action.payload;
      if (state[modalId]) {
        state[modalId].isOpen = false;
      }
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;