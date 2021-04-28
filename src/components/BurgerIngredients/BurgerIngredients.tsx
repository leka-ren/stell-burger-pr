import "./BurgerIngredients.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

function BurgerIngredients() {
  const [current, setCurrent] = useState("one");
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
    </div>
  );
}

export default BurgerIngredients;
