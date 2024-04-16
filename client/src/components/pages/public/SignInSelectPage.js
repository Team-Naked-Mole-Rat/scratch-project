import React, { useState } from "react";
import { useModal } from './visual/ModalContext'; 
import Modal from './visual/Modal.js'
import LoginPage from './signin/LoginPage.js';
import SignupPage from './signin/SignUpPage.js';

export default function SignInSelectPage () {
  const [ isLogin, setIsLogin ] = useState(true);
  const { showModal, hideModal, modalContent, isOpen } = useModal();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleOpenModal = () => { 
    const content = isLogin ? (
      <LoginPage toggleForm ={toggleForm}/>
    ) : (
      <SignupPage toggleForm ={toggleForm}/>
    );
    showModal(content);
  }

  return (
    <div className = "main-content">
      <h1>Green Family / Plant world</h1>

      <div className="main-container">
        <div className="close-button-container">
          <button onClick={handleOpenModal}>Sign In / Register</button>
        </div>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={hideModal}>
            {modalContent}            
          </Modal>
        )}

      </div>
    </div>
  );
};