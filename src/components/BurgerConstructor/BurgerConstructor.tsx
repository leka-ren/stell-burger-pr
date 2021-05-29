import styleBurgerConstructor from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerMainItem from "../BurgerMainItem/BurgerMainItem";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../services/actions/burgerActions";

function BurgerConstructor({ showModal, typeModalWindow }: any) {
  const dispatch = useDispatch();
  const ingredientsConstructor = useSelector(
    (store: any) => store.dataBurger.ingredientsConstructor
  );
  const totalPrice = ingredientsConstructor.reduce(
    (acc: any, el: any) => (el.type === "main" ? acc + el.price : acc),
    0
  );

  const bunData = ingredientsConstructor.find((el: any) => el.type === "bun");
  const totalPriceWithBun = bunData?.price || 0;
  return (
    <div className={styleBurgerConstructor.burgerConstructor}>
      {ingredientsConstructor.length === 0 && (
        <div style={{border: "solid #8585AD 1px", borderRadius: 12, height: "100%", width: "100%"}}>
          <p style={{margin: "auto 20px"}}>Список ингредиентов пуст</p>
        </div>
      )}
      {ingredientsConstructor.length > 0 && (
        <>
          <div className={styleBurgerConstructor.burgerConstructor__items}>
            <BurgerMainItem data={bunData} blocked={true} first={true} />
            <ul className={styleBurgerConstructor.burgerConstructor__itemsMain}>
              {ingredientsConstructor.map(
                (el: any) =>
                  el.type === "main" && (
                    <BurgerMainItem
                      key={el._id}
                      data={el}
                      blocked={false}
                      first={false}
                    />
                  )
              )}
            </ul>
            <BurgerMainItem data={bunData} blocked={true} first={false} />
          </div>
          <div className={styleBurgerConstructor.burgerConstructor__total}>
            <span
              className={
                styleBurgerConstructor.burgerConstructor__toraPriceContent
              }
            >
              <p
                className={
                  styleBurgerConstructor.burgerConstructor__toralPrice +
                  " text_type_digits-default"
                }
              >
                {totalPrice + totalPriceWithBun}
              </p>
              <CurrencyIcon type="primary" />
            </span>
            <Button
              onClick={() => {
                showModal(true);
                typeModalWindow("Order Information");
                dispatch(postOrder(ingredientsConstructor));
              }}
              type="primary"
              size="medium"
            >
              Оформить заказ
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

BurgerConstructor.propTypes = {
  burgerData: PropTypes.object,
  showModal: PropTypes.func,
  typeModalWindow: PropTypes.func,
};

export default BurgerConstructor;
