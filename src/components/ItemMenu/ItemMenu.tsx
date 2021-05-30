import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_CURRENT_INGREDIENTS } from "../../services/actions/burgerActions";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesItemMenu from "./ItemMenu.module.css";

function ItemMenu({ data, showModal, typeModalWindow }: any) {
  const dispatch = useDispatch();

  const { ingredientsConstructor, bun } = useSelector((store: any) => ({
    ingredientsConstructor: store.dataBurger.ingredientsConstructor,
    bun: store.dataBurger.bun,
  }));

  const getCounter = () => {
    if (data.type === "bun") {
      if(bun.name === data.name) {
        return 1;
      }
    } else {
      return ingredientsConstructor.filter((el: any) => el._id === data._id).length;
    }
  }

  let counter = getCounter() || 0;

  const [{ opacity }, ref] = useDrag({
    type: "ingredient",
    item: { data },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

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
      style={{ opacity }}
      ref={ref}
      onClick={getDataIngredients}
      className={stylesItemMenu.burgerIngredients__item}
    >
      <Counter count={counter} size="default" />
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
