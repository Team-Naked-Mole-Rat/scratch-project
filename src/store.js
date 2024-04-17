import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import { apiSlice } from "./features/api/apiSlice.js";
import modalReducer from './features/modals/modalsSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    modals: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
