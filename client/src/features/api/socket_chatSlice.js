import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    messageReceived(state, action) {
      state.messages.push(action.payload);
    },
    sendMessage(state, action) {
    },
  },
});

export const { messageReceived, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;