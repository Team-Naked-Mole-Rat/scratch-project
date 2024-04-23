import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modals/modalsSlice.js";

import authReducer from "./features/auth/authSlice.js";
import { apiSlice } from "./features/api/http_apiSlice.js";

import { plantsApiSlice } from "./features/api/http_plantsApiSlice.js";
import plantsReducer from './features/plants/plantsSlice.js';

import { createWebSocketMiddleware } from './features/api/socket_apiSlice.js';
import chatReducer from "./features/api/socket_chatSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [plantsApiSlice.reducerPath]: plantsApiSlice.reducer,
    modals: modalReducer,
    plants: plantsReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      plantsApiSlice.middleware,
      createWebSocketMiddleware()
    ),
  devTools: true,
});

export default store;