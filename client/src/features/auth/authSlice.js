import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: (() => {
    try {
      const userInfo = localStorage.getItem("userInfo");
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (e) {
      console.log('Error parsing userInfo:', e);
      return null;
    }
    
    })(),
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userInfo, token } = action.payload;

      state.userInfo = userInfo;
      state.success = true;

      if( token ){
        localStorage.setItem("token", token);
      }

    },
    clearCredentials: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("token");
      state.success = false;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
