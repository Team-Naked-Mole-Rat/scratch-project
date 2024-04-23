import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../../components/visual/Modal.js";
import LoginPage from "./Login.js";
import SignupPage from "./Signup.js";
import BackgroundImage from "../../components/visual/BackgroundImage.js";
import { openModal, closeModal } from '../../features/modals/modalsSlice.js'

function RegisterModal() {
  const [ isLogin, setIsLogin ] = useState(true);
  const dispatch = useDispatch();

  const isOpen = useSelector (state => {
    return (state.modals.loginSignupModal.isOpen || false);
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleCloseModal = () => {
    dispatch(closeModal({ modalId: 'loginSignupModal'}));
  }

  useEffect(() => {
    console.log("CURRENT STATE of isOpen::", isOpen);
  }, [isOpen]); 

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
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalBody}
      </Modal>
    </>
  );
}

export function handleOpenModal () {
  const dispatch = useDispatch();
  console.log("HANDLEOPENMODAL")
  dispatch(openModal({ modalId: 'loginSignupModal'}));
};

export default RegisterModal;