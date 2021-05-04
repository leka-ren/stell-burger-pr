import styleBurgerConstructor from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerMainItem from "../BurgerMainItem/BurgerMainItem";
import PropTypes from 'prop-types';
console.log(PropTypes);

function BurgerConstructor(burgerData: any) {
  const totalPrice = burgerData.data.reduce(
    (acc: any, el: any) => (el.type === "main" ? acc + el.price : acc),
    0
  );

  const bunData = burgerData.data.find((el: any) => el.type === "bun");
  const totalPriceWithBun = bunData?.price || 0;
  return (
    <div className={styleBurgerConstructor.burgerConstructor}>
      <div className={styleBurgerConstructor.burgerConstructor__items}>
        <BurgerMainItem data={bunData} blocked={true} first={true} />
        <ul className={styleBurgerConstructor.burgerConstructor__itemsMain}>
          {burgerData.data.map(
            (el: any) =>
              el.type === "main" && (
                <BurgerMainItem
                  key={el._id}
                  data={el}
                  blocked={false}
                  first={false}
                />
              )
          )}
        </ul>
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
