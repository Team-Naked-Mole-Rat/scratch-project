import React, { useState } from "react";
import { useModal } from "../../components/visual/ModalContext";
import Modal from "../../components/visual/Modal.js";
import LoginPage from "../Login/Login.js";
import SignupPage from "../Login/Signup.js";

export default function SignInSelectPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { showModal, hideModal, modalContent, isOpen } = useModal();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleOpenModal = () => {
    const content = isLogin ? (
      <LoginPage toggleForm={toggleForm} />
    ) : (
      <SignupPage toggleForm={toggleForm} />
    );
    showModal(content);
  };

  return (
    <div className="main-content">
      <h1>Green Family</h1>

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
}
