import stylesModalOverlay from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import { useEffect } from "react";

function ModalOverlay({ showModal, children }: any) {
  const closeEvent = (e: any) => {
    if(e.key === "Escape" || e.target.id === 'overlay') showModal(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", closeEvent);
    return () => document.removeEventListener("keydown", closeEvent);
  }, []);

  return (
    <div
      onClick={closeEvent}
      id="overlay"
      className={stylesModalOverlay.modal__overlay}
    >
      <Modal showModal={showModal}>{children}</Modal>
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.object,
  showModal: PropTypes.func,
};

export default ModalOverlay;
