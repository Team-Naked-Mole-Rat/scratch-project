import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './features/chat/chatSlice';

function ChatComponent() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);
  const token = useSelector(state => state.auth.token); // Assuming token is stored in auth slice

  useEffect(() => {
    dispatch({ type: 'chat/connect', payload: { token } });
  }, [dispatch, token]);

  return (
    <div>
      {messages.map((msg, index) => <div key={index}>{msg.text}</div>)}
      <button onClick={() => dispatch(sendMessage({ text: 'Hello!' }))}>Send Message</button>
    </div>
  );
}
