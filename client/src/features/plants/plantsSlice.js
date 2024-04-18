import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  plantList: [],
};

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    addPlant: (state, action) => {
      // const { name, newPlant } = action.payload;
      state.plantList.push(action.payload);
    },
    editPlant: (state, action) => {
      const { name, updatedPlant } = action.payload;
      const index = state.plantList.findIndex((plant) => plant.name === name);
      // If plant exists
      if (index !== -1) {
        state.plantList[index] = updatedPlant;
      }
    },
    deletePlant: (state, action) => {
      // Payload is a string
      state.plantList = state.plantList.filter(
        (plant) => plant.name !== action.payload
      );
    },
  },
});

export const { addPlant, editPlant, deletePlant } = plantsSlice.actions;

export default plantsSlice.reducer;
