import React from "react";

function Modal({ message, onCloseModal }) {
  return (
    <>
      <div className="modal"></div>
      <div className="modal__body">
        <p className="modal__message">{message}</p>
        <p className="modal__icon" onClick={onCloseModal}>
          &times;
        </p>
      </div>
    </>
  );
}

export default Modal;
