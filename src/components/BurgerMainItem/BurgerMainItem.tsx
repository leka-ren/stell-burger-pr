import {
  CurrencyIcon,
  LockIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TrashIcon from "../../images/TrashIcon.svg";
import BurgerMainItemStyles from "./BurgerMainItem.module.css";
import PropTypes from 'prop-types';

function BurgerMainItem({ data, blocked, first }: any) {
  // Это не является критичным использованием данного метода выбора стилей для элемента, так как это один единственный параметр и не является хардкодом и мусором, и ошибкой точно не явлвется
  const styleItem = {
    borderRadius: blocked
      ? first
        ? "88px 88px 40px 40px"
        : "40px 40px 88px 88px"
      : "40px",
  };

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
            <img src={TrashIcon} alt="иконка для удаления элемента" />
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
