import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/visual/Modal.js";
import AddPlantForm from "./AddPlantForm.js";
import { closeModal } from "../../features/modals/modalsSlice.js";

function AddPlantModal({ isOpen, onClose, onAddPlant }) {
  const dispatch = useDispatch();
  const modalId = "addPlantModal";

  const handleClose = () => {
    dispatch(closeModal(modalId));
    onAddPlant();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <AddPlantForm onClose={handleClose} />
    </Modal>
  );
}

export default AddPlantModal;

export function handleOpenAddPlantModal() {
  const dispatch = useDispatch();
  dispatch(openModal({ modalId: "addPlantModal" }));
}
