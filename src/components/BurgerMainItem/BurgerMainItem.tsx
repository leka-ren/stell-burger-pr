import {
  CurrencyIcon,
  LockIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TrashIcon from "../../images/TrashIcon.svg";
import BurgerMainItemStyles from "./BurgerMainItem.module.css";

function BurgerMainItem({ data, blocked, first }: any) {
  const styleItem = {
    borderRadius: blocked
      ? first
        ? "88px 88px 40px 40px"
        : "40px 40px 88px 88px"
      : "40px",
  };

  return (
    <div
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
      <p className={BurgerMainItemStyles.burgerMainItem__itemName}>
        {data.name}
      </p>
      <div className={BurgerMainItemStyles.burgerMainItem__itemOptions}>
        <p className={BurgerMainItemStyles.burgerMainItem__itemPrice}>
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
    </div>
  );
}

export default BurgerMainItem;
