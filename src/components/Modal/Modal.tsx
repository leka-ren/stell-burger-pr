import stylesModal from "./Modal.module.css";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";

function Modal({ showModal, children }: any) {
  const modalRoot:any = document.querySelector("#modal-container");
  return ReactDOM.createPortal(
    <div className={stylesModal.modal__window}>
      <span className={stylesModal.modal__closeIcon}>
        <CloseIcon onClick={() => showModal(false)} type="primary" />
      </span>
      {children}
    </div>
  , modalRoot);
}

Modal.propTypes = {
  children: PropTypes.object,
  showModal: PropTypes.func,
};

export default Modal;
