import styleBurgerConstructor from "./BurgerConstructor.module.css";
import burgerData from "../../const/burgerData";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerMainItem from "../BurgerMainItem/BurgerMainItem";

function BurgerConstructor() {
  const totalPrice = burgerData.reduce(
    (acc, el) => (el.type === "main" ? acc + el.price : acc),
    0
  );

  const bunData = burgerData.find((el) => el.type === "bun");
  const totalPriceWithBun = bunData?.price || 0;
  return (
    <div className={styleBurgerConstructor.burgerConstructor}>
      <div className={styleBurgerConstructor.burgerConstructor__items}>
        <BurgerMainItem data={bunData} blocked={true} first={true} />
        <div className={styleBurgerConstructor.burgerConstructor__itemsMain}>
          {burgerData.map(
            (el) =>
              el.type === "main" && (
                <BurgerMainItem
                  key={el._id}
                  data={el}
                  blocked={false}
                  first={false}
                />
              )
          )}
        </div>
        <BurgerMainItem data={bunData} blocked={true} first={false} />
      </div>
      <div className={styleBurgerConstructor.burgerConstructor__total}>
        <span className={styleBurgerConstructor.burgerConstructor__toraPriceContent}>
          <p className={styleBurgerConstructor.burgerConstructor__toralPrice + " text_type_digits-default"}>
            {totalPrice + totalPriceWithBun}
          </p>
          <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
