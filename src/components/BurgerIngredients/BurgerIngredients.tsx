import "./BurgerIngredients.css";
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
      <div className="burger-ingredients__item">
        <img src={props.image} alt="картинка" />
        <div className="burger-ingredients__price-content">
          <p className="text_type_digits-default burger-ingredients__price">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p>{props.name}</p>
      </div>
    );
  };

  return (
    <div className="burger-ingredients">
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
      <div className="burger-ingredients__content">
        <div className="burger-ingredients__items-content">
          <p className="text_type_main-medium">Булки</p>
          <div className="burger-ingredients__items">
            {burgerData.map(
              (el) => el.type === "bun" && <ItemMenu key={el._id} props={el} />
            )}
          </div>
        </div>
        <div className="burger-ingredients__items-content">
          <p className="text_type_main-medium">Соусы</p>
          <div className="burger-ingredients__items">
            {burgerData.map(
              (el) =>
                el.type === "sauce" && <ItemMenu key={el._id} props={el} />
            )}
          </div>
        </div>
        <div className="burger-ingredients__items-content">
          <p className="text_type_main-medium">Ингредиенты</p>
          <div className="burger-ingredients__items">
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
