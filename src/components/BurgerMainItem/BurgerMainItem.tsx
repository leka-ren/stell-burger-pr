import {
  CurrencyIcon,
  LockIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TrashIcon from "../../images/TrashIcon.svg";
import BurgerMainItemStyles from "./BurgerMainItem.module.css";
import PropTypes from 'prop-types';

import { DELETE_ITEM_CONSTRUCTOR } from "../../services/actions/burgerActions";
import { useDispatch } from "react-redux";

function BurgerMainItem({ data, blocked, first }: any) {
  const dispatch = useDispatch();
  const styleItem = {
    borderRadius: blocked
      ? first
        ? "88px 88px 40px 40px"
        : "40px 40px 88px 88px"
      : "40px",
  };

  const handlerDeleteItem = () => {
    dispatch({
      type: DELETE_ITEM_CONSTRUCTOR,
      id: data._id
    });
  }

  return (
    <li
      style={styleItem}
      className={BurgerMainItemStyles.burgerMainItem__item}
    >
      {!blocked && (
        <span className={BurgerMainItemStyles.burgerMainItem__iteDdBtn}>
          <DragIcon type="primary" />
        </span>
      )}
      <img
        className={BurgerMainItemStyles.burgerMainItem__itemImg}
        src={data.image_mobile}
        alt="картинка ингредиента"
      />
      <p className={BurgerMainItemStyles.burgerMainItem__itemName + " text_type_main-default"}>
        {data.name}
      </p>
      <div className={BurgerMainItemStyles.burgerMainItem__itemOptions}>
        <p className={BurgerMainItemStyles.burgerMainItem__itemPrice + " text_type_digits-default"}>
          {data.price}
        </p>
        <span className={BurgerMainItemStyles.burgerMainItem__itemIconPrice}>
          <CurrencyIcon type="primary" />
        </span>
        {blocked ? (
          <span
            className={BurgerMainItemStyles.burgerMainItem__itemIconLock}
          >
            <LockIcon type="secondary" />
          </span>
        ) : (
          <span
            className={BurgerMainItemStyles.burgerMainItem__itemIconTrash}
          >
            <img onClick={handlerDeleteItem} src={TrashIcon} alt="иконка для удаления элемента" />
          </span>
        )}
      </div>
    </li>
  );
}

BurgerMainItem.propTypes = {
  data: PropTypes.object,
  blocked: PropTypes.bool,
  first: PropTypes.bool,
};

export default BurgerMainItem;
