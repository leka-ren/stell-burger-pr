import stylesIngredientDetails from "./IngredientDetails.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

function IngredientDetails({ dataIngredients, showModal }: any) {
  return (
    <ModalOverlay showModal={showModal}>
      {
        <div>
          <p
            className={
              stylesIngredientDetails.ingredientDetails__title +
              " text_type_main-large"
            }
          >
            Детали ингредиента
          </p>
          <div className={stylesIngredientDetails.ingredientDetails__content}>
            <img
              className={stylesIngredientDetails.ingredientDetails__img}
              src={dataIngredients.image_large}
            />
            <p className="text_type_main-medium">
              {dataIngredients.name}
            </p>
            <p
              className={stylesIngredientDetails.ingredientDetails__discription + " text_type_main-default"}
            >
              Превосходные котлеты из марсианской Магнолии для фирменных
              космических бургеров, набирающих популярность по всей вселенной.
            </p>
            <ul className={stylesIngredientDetails.ingredientDetails__nutrients}>
                <li>
                    <p className="text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className={stylesIngredientDetails.ingredientDetails__nutrientsSum + " text text_type_digits-default text_color_inactive"}>{dataIngredients.calories}</p>
                </li>
                <li>
                    <p className="text_type_main-default text_color_inactive">Белки, г</p>
                    <p className={stylesIngredientDetails.ingredientDetails__nutrientsSum + " text text_type_digits-default text_color_inactive"}>{dataIngredients.proteins}</p>
                </li>
                <li>
                    <p className="text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className={stylesIngredientDetails.ingredientDetails__nutrientsSum + " text text_type_digits-default text_color_inactive"}>{dataIngredients.fat}</p>
                </li>
                <li>
                    <p className="text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className={stylesIngredientDetails.ingredientDetails__nutrientsSum + " text text_type_digits-default text_color_inactive"}>{dataIngredients.carbohydrates}</p>
                </li>
            </ul>
          </div>
        </div>
      }
    </ModalOverlay>
  );
}

IngredientDetails.propTypes = {
  dataIngredients: PropTypes.object,
  showModal: PropTypes.func,
};

export default IngredientDetails;
