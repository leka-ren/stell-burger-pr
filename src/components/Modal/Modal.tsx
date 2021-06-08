import stylesModal from "./Modal.module.css";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { CLEAR_INGREDIENT_DATA } from "../../services/actions/burgerActions";

function Modal({ showModal, children }: any) {
  const dispatch = useDispatch();
  const modalRoot: any = document.querySelector("#modal-container");
  const closeHandler = () => {
    showModal(false);
    dispatch({
      type: CLEAR_INGREDIENT_DATA,
    });
  };
  return ReactDOM.createPortal(
    <div className={stylesModal.modal__window}>
      <span className={stylesModal.modal__closeIcon}>
        <CloseIcon onClick={closeHandler} type="primary" />
      </span>
      {children}
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  showModal: PropTypes.func,
};

export default Modal;
