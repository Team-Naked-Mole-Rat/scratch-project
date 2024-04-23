import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";

const plantsAdapter = createEntityAdapter({
  selectId: (plant) => plant.plantid,
  sortComparer: (a, b) => b.plantid.localeCompare(a.plantid),
});

const initialState = plantsAdapter.getInitialState({
  visibilityPlantIds: {},
});

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    plantAdded: plantsAdapter.addOne,
    plantUpdated: plantsAdapter.updateOne,
    plantRemoved: plantsAdapter.removeOne,
    visibility_setOptimisticOpacity: (state, action) => {
      const { plantId } = action.payload;
      console.log(`Setting optimistic opacity for plant ${plantId}`);
      state.visibilityPlantIds[plantId] = 'optimisticOpacity';
    },
    visibility_setOptimisticDelete: (state, action) => {
      const { plantId } = action.payload;
      console.log(`Setting optimistic delete for plant ${plantId}`);
      state.visibilityPlantIds[plantId] = 'optimisticDelete';
    },
    visibility_initialize: (state, action) => {
      const plantIds = Array.isArray(action.payload) ? action.payload : [action.payload];
      plantIds.forEach(plantId => {
        state.visibilityPlantIds[plantId] = 'normal';
      });
    },
    visibility_setNormal: (state, action) => {
      const { plantId } = action.payload;
      console.log(`Setting optimistic delete for plant ${plantId}`);
      state.visibilityPlantIds[plantId] = 'normal';
    },
  }
});

export const plantsSelectors = plantsAdapter.getSelectors(state => state.plants);

export const { 
  plantAdded,
  plantUpdated,
  plantRemoved,
  visibility_setOptimisticOpacity,
  visibility_setOptimisticDelete,
  visibility_initialize,
  visibility_setNormal
} = plantsSlice.actions;

export default plantsSlice.reducer;