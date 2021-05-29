import stylesBurgerIngredients from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemMenu from "../ItemMenu/ItemMenu";
import PropTypes from "prop-types";
import { getIngredientsData } from "../../services/actions/burgerActions";

function BurgerIngredients({
  showModal,
  typeModalWindow,
  currentDataIngredients,
}: any) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("one");
  const { burgerData, request, failed } = useSelector((store: any) => ({
    burgerData: store.dataBurger.ingredients,
    request: store.dataBurger.request,
    failed: store.dataBurger.failed,
  }));

  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  return (
    <div className={stylesBurgerIngredients.burgerIngredients}>
      {request && (
        <div>
          <p>Загрузка ингредиентов...</p>
        </div>
      )}
      {failed && (
        <div>
          <p>Что-то пошло не так</p>
        </div>
      )}
      {!request && !failed && burgerData && (
        <>
          <p
            className={
              stylesBurgerIngredients.app__contentTitle +
              " text_type_main-large"
            }
          >
            Соберите Бургер
          </p>
          <div style={{ display: "flex" }}>
            <Tab
              value="Булки"
              active={current === "Булки"}
              onClick={setCurrent}
            >
              Булки
            </Tab>
            <Tab
              value="Соусы"
              active={current === "Соусы"}
              onClick={setCurrent}
            >
              Соусы
            </Tab>
            <Tab
              value="Начинки"
              active={current === "Начинки"}
              onClick={setCurrent}
            >
              Начинки
            </Tab>
          </div>
          <div className={stylesBurgerIngredients.burgerIngredients__content}>
            <div
              className={
                stylesBurgerIngredients.burgerIngredients__itemsContent
              }
            >
              <p className="text_type_main-medium">Булки</p>
              <div className={stylesBurgerIngredients.burgerIngredients__items}>
                {burgerData.map(
                  (el: any) =>
                    el.type === "bun" && (
                      <ItemMenu
                        showModal={showModal}
                        typeModalWindow={typeModalWindow}
                        currentDataIngredients={currentDataIngredients}
                        key={el._id}
                        data={el}
                      />
                    )
                )}
              </div>
            </div>
            <div
              className={
                stylesBurgerIngredients.burgerIngredients__itemsContent
              }
            >
              <p className="text_type_main-medium">Соусы</p>
              <ul className={stylesBurgerIngredients.burgerIngredients__items}>
                {burgerData.map(
                  (el: any) =>
                    el.type === "sauce" && (
                      <ItemMenu
                        showModal={showModal}
                        typeModalWindow={typeModalWindow}
                        currentDataIngredients={currentDataIngredients}
                        key={el._id}
                        data={el}
                      />
                    )
                )}
              </ul>
            </div>
            <div
              className={
                stylesBurgerIngredients.burgerIngredients__itemsContent
              }
            >
              <p className="text_type_main-medium">Ингредиенты</p>
              <ul className={stylesBurgerIngredients.burgerIngredients__items}>
                {burgerData.map(
                  (el: any) =>
                    el.type === "main" && (
                      <ItemMenu
                        showModal={showModal}
                        typeModalWindow={typeModalWindow}
                        currentDataIngredients={currentDataIngredients}
                        key={el._id}
                        data={el}
                      />
                    )
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

BurgerIngredients.propTypes = {
  burgerData: PropTypes.object,
  showModal: PropTypes.func,
  typeModalWindow: PropTypes.func,
  currentDataIngredients: PropTypes.func,
};

export default BurgerIngredients;
