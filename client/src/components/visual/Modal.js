import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="form-group">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
