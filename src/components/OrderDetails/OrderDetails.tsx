import { useState } from "react";
import stylesOrderDetails from "./OrderDetails.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import doneOrderImg from "../../images/done.png";

function OrderDetails({ showModal }: any) {
  const [orderNumber, setOrderNumber] = useState(
    Math.floor(100000 + Math.random() * (999999 + 1 - 100000))
  );

  return (
    <ModalOverlay showModal={showModal}>
      <div className={stylesOrderDetails.orderDetails__conent}>
        <p
          className={
            stylesOrderDetails.orderDetails__orderNumber +
            " text_type_digits-large"
          }
        >
          {orderNumber}
        </p>
        <p className="text_type_main-medium">идентификатор заказа</p>
        <img
          className={stylesOrderDetails.orderDetails__img}
          src={doneOrderImg}
          alt="Картинка с галочкой"
        />
        <p className="text text_type_main-default" >Ваш заказ начали готовить</p>
        <p className={stylesOrderDetails.orderDetails__text + " text text_type_main-default"} >Дождитесь готовности на орбитальной станции</p>
      </div>
    </ModalOverlay>
  );
}

OrderDetails.propTypes = {
  showModal: PropTypes.func,
};

export default OrderDetails;
