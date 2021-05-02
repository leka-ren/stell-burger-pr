import stylesBurgerIngredients from "./BurgerIngredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import burgerData from "../../const/burgerData";

function BurgerIngredients() {
  const [current, setCurrent] = useState("one");

  const ItemMenu = ({ props }: any) => {
    return (
      <div className={stylesBurgerIngredients.burgerIngredients__item}>
        <img src={props.image} alt="картинка" />
        <div className={stylesBurgerIngredients.burgerIngredients__priceContent}>
          <p className={stylesBurgerIngredients.burgerIngredients__price}>{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p>{props.name}</p>
      </div>
    );
  };

  return (
    <div className={stylesBurgerIngredients.burgerIngredients}>
      <p className={stylesBurgerIngredients.app__contentTitle}>Соберите Бургер</p>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Three
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
          <div className={stylesBurgerIngredients.burgerIngredients__items}>
            {burgerData.map(
              (el) =>
                el.type === "sauce" && <ItemMenu key={el._id} props={el} />
            )}
          </div>
        </div>
        <div className={stylesBurgerIngredients.burgerIngredients__itemsContent}>
          <p className="text_type_main-medium">Ингредиенты</p>
          <div className={stylesBurgerIngredients.burgerIngredients__items}>
            {burgerData.map(
              (el) =>
                el.type === "main" && <ItemMenu key={el._id} props={el} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
