import styleBurgerConstructor from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerMainItem from "../BurgerMainItem/BurgerMainItem";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../services/actions/burgerActions";
import { useDrop } from "react-dnd";

import {
  ADD_ITEM_TO_CONSTRUCTOR,
  SET_BUN,
} from "../../services/actions/burgerActions";

function BurgerConstructor({ showModal, typeModalWindow }: any) {
  const dispatch = useDispatch();
  const {ingredientsConstructor, bun} = useSelector(
    (store: any) =>({ ingredientsConstructor: store.dataBurger.ingredientsConstructor, bun: store.dataBurger.bun})
  );

  const totalPrice = ingredientsConstructor.reduce(
    (acc: any, el: any) => acc + el.price,
    0
  );
  const bunPrice = bun.price || 0;

  const setDataConstroctor = (item: any) => {
    console.log(item);
    if (item.type !== "bun") {
      dispatch({
        type: ADD_ITEM_TO_CONSTRUCTOR,
        item: item,
      });
    } else {
      dispatch({
        type: SET_BUN,
        item: item,
      });
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: any) {
      setDataConstroctor(item.data);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  return (
    <div className={styleBurgerConstructor.burgerConstructor} ref={dropTarget}>
      {(ingredientsConstructor.length === 0 && !bun.type) && (
        <div
          style={{
            border: "solid #8585AD 1px",
            borderRadius: 12,
            height: "100%",
            width: "100%",
          }}
        >
          <p style={{ margin: "auto 20px" }}>Список ингредиентов пуст</p>
        </div>
      )}
      {(ingredientsConstructor.length > 0 || bun.type) && (
        <>
          <div className={styleBurgerConstructor.burgerConstructor__items}>
            {bun.type && (
              <BurgerMainItem data={bun} blocked={true} first={true} />
            )}
            <ul className={styleBurgerConstructor.burgerConstructor__itemsMain}>
              {ingredientsConstructor.map((el: any) => (
                <BurgerMainItem
                  key={el._id}
                  data={el}
                  blocked={false}
                  first={false}
                />
              ))}
            </ul>
            {bun.type && (
              <BurgerMainItem data={bun} blocked={true} first={false} />
            )}
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
                {totalPrice + bunPrice}
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
