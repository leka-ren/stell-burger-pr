import stylesBurgerIngredients from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState } from "react";
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

  const ingredientsContentContainerRef = useRef<HTMLDivElement>(null);
  const burgerContainerRef = useRef<HTMLDivElement>(null);
  const souceContainerRef = useRef<HTMLDivElement>(null);
  const ingredientsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  // столько расчетов для того чтобы чувствительность была выше (жизнью научена)
  const handlerScroll = (e: any) => {
     // @ts-ignore
     (burgerContainerRef.current?.getBoundingClientRect().top + burgerContainerRef.current?.offsetHeight > ingredientsContentContainerRef.current?.getBoundingClientRect().top) ||
     // @ts-ignore
     (burgerContainerRef.current?.getBoundingClientRect().top - burgerContainerRef.current?.offsetHeight < ingredientsContentContainerRef.current?.getBoundingClientRect().top) &&
      setCurrent("Булки");
    // @ts-ignore
    (souceContainerRef.current?.getBoundingClientRect().top + souceContainerRef.current?.offsetHeight > ingredientsContentContainerRef.current?.getBoundingClientRect().top) ||
    // @ts-ignore
    (souceContainerRef.current?.getBoundingClientRect().top - souceContainerRef.current?.offsetHeight < ingredientsContentContainerRef.current?.getBoundingClientRect().top) &&
      setCurrent("Соусы");
    // @ts-ignore
    (ingredientsContainerRef.current?.getBoundingClientRect().top + ingredientsContainerRef.current?.offsetHeight > ingredientsContentContainerRef.current?.getBoundingClientRect().top) ||
    // @ts-ignore
    (ingredientsContainerRef.current?.getBoundingClientRect().top - ingredientsContainerRef.current?.offsetHeight < ingredientsContentContainerRef.current?.getBoundingClientRect().top) &&
      setCurrent("Начинки");
  };

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
          <div
            ref={ingredientsContentContainerRef}
            className={stylesBurgerIngredients.burgerIngredients__content}
            onScroll={handlerScroll}
          >
            <div
              className={
                stylesBurgerIngredients.burgerIngredients__itemsContent
              }
            >
              <p className="text_type_main-medium" ref={burgerContainerRef}>
                Булки
              </p>
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
              <p className="text_type_main-medium" ref={souceContainerRef}>
                Соусы
              </p>
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
              <p
                className="text_type_main-medium"
                ref={ingredientsContainerRef}
              >
                Ингредиенты
              </p>
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
