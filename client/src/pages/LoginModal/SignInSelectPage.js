import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../../components/visual/Modal.js";

import LoginPage from "../Login/Login.js";
import SignupPage from "../Login/Signup.js";
import BackgroundImage from "../../components/visual/BackgroundImage.js";
import { openModal, closeModal } from './../../features/modals/modalsSlice.js'


export default function SignInSelectPage() {
  const [ isLogin, setIsLogin ] = useState(true);
  const dispatch = useDispatch();
  const isOpen = useSelector (state => {
    console.log("CURRENT STATE:::::", state)
    return state.modals.loginSignupModal.isOpen ? state.modals.loginSignupModal.isOpen : false;
  
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleOpenModal = () => {
    console.log("HANDLEOPENMODAL")
    dispatch(openModal({ modalId: 'loginSignupModal'}));
  };

  const handleCloseModal = () => {
    dispatch(closeModal({ modalId: 'loginSignupModal'}));
  }

  const modalBody = (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <BackgroundImage />
      
      { isLogin ? ( 
        <LoginPage toggleForm={toggleForm} /> 
      ) : ( 
        <SignupPage toggleForm={toggleForm} /> 
      )}

    </div>
  );

  return (
    <div className="main-content">
      <h1>Green Family</h1>

      <div className="main-container">
        <div className="close-button-container">
          <button onClick={handleOpenModal}>Sign In / Register</button>
        </div>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            {modalBody}
          </Modal>
        )}
      </div>
    </div>
  );
}
