import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import stylesItemMenu from "./ItemMenu.module.css";

function ItemMenu({ props }: any) {
  const counter = 1;
  return (
    <li className={stylesItemMenu.burgerIngredients__item}>
        <span className={stylesItemMenu.burgerIngredients__counter + " text_type_digits-default"}>{counter}</span>
      <img src={props.image} alt="картинка" />
      <div className={stylesItemMenu.burgerIngredients__priceContent}>
        <p className={stylesItemMenu.burgerIngredients__price + " text_type_digits-default"}>
          {props.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text_type_main-default">{props.name}</p>
    </li>
  );
}

ItemMenu.propTypes = {
    props: PropTypes.object,
};

export default ItemMenu;
