import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/visual/Modal.js";
import AddPlantForm from "./AddPlantForm.js";
import { closeModal } from "../../features/modals/modalsSlice.js";

function AddPlantModal({ isOpen, onAddPlant }) {
  const dispatch = useDispatch();
  const modalId = "addPlantModal";

  const handleClose = () => {
    dispatch(closeModal({ modalId: 'addPlantModal' }));
  };

  const handleSubmitSuccess = () => {
    handleClose();
    onAddPlant();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <AddPlantForm onClose={handleSubmitSuccess} />
    </Modal>
  );
}

export default AddPlantModal;