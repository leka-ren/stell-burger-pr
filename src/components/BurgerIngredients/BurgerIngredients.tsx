import stylesBurgerIngredients from "./BurgerIngredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import burgerData from "../../const/burgerData";
import ItemMenu from "../ItemMenu/ItemMenu";

function BurgerIngredients() {
  const [current, setCurrent] = useState("one");

  return (
    <div className={stylesBurgerIngredients.burgerIngredients}>
      <p className={stylesBurgerIngredients.app__contentTitle + " text_type_main-large"}>Соберите Бургер</p>
      <div style={{ display: "flex" }}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={stylesBurgerIngredients.burgerIngredients__content}>
        <div className={stylesBurgerIngredients.burgerIngredients__itemsContent}>
          <p className="text_type_main-medium">Булки</p>
          <div className={stylesBurgerIngredients.burgerIngredients__items}>
            {burgerData.map(
              (el) => el.type === "bun" && <ItemMenu key={el._id} props={el} />
            )}
          </div>
        </div>
        <div className={stylesBurgerIngredients.burgerIngredients__itemsContent}>
          <p className="text_type_main-medium">Соусы</p>
          <ul className={stylesBurgerIngredients.burgerIngredients__items}>
            {burgerData.map(
              (el) =>
                el.type === "sauce" && <ItemMenu key={el._id} props={el} />
            )}
          </ul>
        </div>
        <div className={stylesBurgerIngredients.burgerIngredients__itemsContent}>
          <p className="text_type_main-medium">Ингредиенты</p>
          <ul className={stylesBurgerIngredients.burgerIngredients__items}>
            {burgerData.map(
              (el) =>
                el.type === "main" && <ItemMenu key={el._id} props={el} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
