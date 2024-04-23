import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    // <div
    <>
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal close-button-container">
          <button className="modal close-button" onClick={onClose}>X</button>
        </div>
        {children}
       </div>
     </div>
    </> 
  );
};

export default Modal;
