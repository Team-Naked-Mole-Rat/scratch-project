import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import { apiSlice } from "./features/api/apiSlice.js";
import modalReducer from "./features/modals/modalsSlice.js";
import { plantsApiSlice } from "./features/api/plantsApiSlice.js";
import plantsReducer from './features/plants/plantsSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [plantsApiSlice.reducerPath]: plantsApiSlice.reducer,
    modals: modalReducer,
    plants: plantsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      plantsApiSlice.middleware
    ),
  devTools: true,
});

export default store;
