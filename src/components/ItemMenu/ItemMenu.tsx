import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { GET_DATA_CURRENT_INGREDIENTS } from "../../services/actions/burgerActions";

import stylesItemMenu from "./ItemMenu.module.css";

function ItemMenu({ data, showModal, typeModalWindow }: any) {
  const dispatch = useDispatch();
  const counter = 1;

  const getDataIngredients = () => {
    showModal(true);
    dispatch({
      type: GET_DATA_CURRENT_INGREDIENTS,
      currentIngredient: data,
    });
    typeModalWindow("Ingredients information");
  };

  return (
    <li
      onClick={getDataIngredients}
      className={stylesItemMenu.burgerIngredients__item}
    >
      <span
        className={
          stylesItemMenu.burgerIngredients__counter +
          " text_type_digits-default"
        }
      >
        {counter}
      </span>
      <img src={data.image} alt="картинка" />
      <div className={stylesItemMenu.burgerIngredients__priceContent}>
        <p
          className={
            stylesItemMenu.burgerIngredients__price +
            " text_type_digits-default"
          }
        >
          {data.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text_type_main-default">{data.name}</p>
    </li>
  );
}

ItemMenu.propTypes = {
  data: PropTypes.object,
  currentDataIngredients: PropTypes.func,
  showModal: PropTypes.func,
  typeModalWindow: PropTypes.func,
};

export default ItemMenu;
