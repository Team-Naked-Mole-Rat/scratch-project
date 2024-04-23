import { MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';

function createWebSocketMiddleware() {
  let socket;

  const onOpen = (ws, store, token) => evt => {
    console.log("Connected to WebSocket server");
    ws.send(JSON.stringify({ token }));
  };

  const onMessage = store => evt => {
    const message = JSON.parse(evt.data);
    store.dispatch({ type: 'chat/messageReceived', payload: message });
  };

  return store => next => action => {
    switch (action.type) {
      case 'chat/connect':
        if (socket !== null) {
          socket.close();
        }
        socket = new WebSocket("ws://localhost:3000/ws/chat");
        socket.onopen = onOpen(socket, store, action.payload.token);
        socket.onmessage = onMessage(store);
        socket.onerror = error => {
          console.error('WebSocket error:', error);
          store.dispatch(isRejectedWithValue(error));
        };
        break;
      case 'chat/sendMessage':
        socket.send(JSON.stringify(action.payload));
        break;
      default:
        return next(action);
    }
  };
}

export { createWebSocketMiddleware };