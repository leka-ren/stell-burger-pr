import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesItemMenu from "./ItemMenu.module.css";

function ItemMenu({ props }: any) {
  return (
    <div className={stylesItemMenu.burgerIngredients__item}>
      <img src={props.image} alt="картинка" />
      <div className={stylesItemMenu.burgerIngredients__priceContent}>
        <p className={stylesItemMenu.burgerIngredients__price}>
          {props.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default ItemMenu;
