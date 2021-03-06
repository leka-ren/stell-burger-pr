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
import update from "immutability-helper";

import { UPDATE_CONSTRUCTOR } from "../../services/actions/burgerActions";

import {
  ADD_ITEM_TO_CONSTRUCTOR,
  SET_BUN,
} from "../../services/actions/burgerActions";
import { useCallback, useEffect, useState } from "react";

function BurgerConstructor({ showModal, typeModalWindow }: any) {
  const dispatch = useDispatch();
  const { ingredientsConstructor, bun } = useSelector((store: any) => ({
    ingredientsConstructor: store.dataBurger.ingredientsConstructor,
    bun: store.dataBurger.bun,
  }));

  const totalPrice = ingredientsConstructor.reduce(
    (acc: any, el: any) => acc + el.price,
    0
  );
  const bunPrice = bun.price || 0;

  const setDataConstroctor = (item: any) => {
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

  const orderHandler = () => {
    if (bun.name) {
      showModal(true);
      typeModalWindow("Order Information");
      dispatch(postOrder(ingredientsConstructor, bun));
    } else if (!bun) {
      return;
    }
  };

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch({
        type: UPDATE_CONSTRUCTOR,
        itemsUpdate: {
          dragIndex,
          hoverIndex,
        },
      });
    },
    [ingredientsConstructor]
  );

  return (
    <div className={styleBurgerConstructor.burgerConstructor} ref={dropTarget}>
      {ingredientsConstructor.length === 0 && !bun.type && (
        <div
          style={{
            border: `solid ${isHover ? "#123456" : "#8585AD"} 1px`,
            borderRadius: 12,
            height: "100%",
            width: "100%",
          }}
        >
          <p style={{ margin: "auto 20px" }}>???????????? ???????????????????????? ????????</p>
        </div>
      )}
      {(ingredientsConstructor.length > 0 || bun.type) && (
        <>
          <div className={styleBurgerConstructor.burgerConstructor__items}>
            {bun.type && (
              <BurgerMainItem data={bun} blocked={true} first={true} />
            )}
            <ul className={styleBurgerConstructor.burgerConstructor__itemsMain}>
              {ingredientsConstructor.map((el: any, i: any) => {
                return (
                  <BurgerMainItem
                    moveCard={moveCard}
                    key={i}
                    id={el._id}
                    index={i}
                    data={el}
                    blocked={false}
                    first={false}
                  />
                );
              })}
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
                {totalPrice + bunPrice * 2}
              </p>
              <CurrencyIcon type="primary" />
            </span>
            <Button onClick={orderHandler} type="primary" size="medium">
              {bun.name ? "???????????????? ??????????" : "???????????????? ??????????????!"}
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
