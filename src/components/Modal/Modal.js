import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./modal.css";

export const Modal = ({ modal, setModal,children, status }) => {
  const elOverlay = useRef();

  const closeModal = (evt) => {
    if (evt.target === elOverlay.current) {
      setModal(false);
    }
  };

  useEffect(() => {
    function handleCloseModal(evt) {
      console.log(evt);
      if (evt.code === "Escape") {
        setModal(false);
      }
    }
    if (modal) {
      window.addEventListener("keyup", handleCloseModal);
    }
    return () => window.removeEventListener("keyup", handleCloseModal);
  },[modal]);

  return (
    <div
      ref={elOverlay}
      onClick={closeModal}
      className={`overlay d-flex position-fixed top-0 start-0 w-100 h-100 align-items-center ${
        !modal && "d-none"
      }`}
    >
      <div className="modal-main m-auto bg-white w-50">
        <div className="modal-header bg-light p-4">
          <h3>{status}</h3>
          <button onClick={() => setModal(false)} className="btn btn-danger">
            &times;
          </button>
        </div>
        <div className="modal-content p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
