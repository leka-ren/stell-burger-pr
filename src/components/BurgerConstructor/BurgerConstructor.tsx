import "./BurgerConstructor.css";
import burgerData from "../../const/burgerData";
import {
  CurrencyIcon,
  LockIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TrashIcon from "../../images/TrashIcon.svg";

function BurgerConstructor() {
  const totalPrice = burgerData.reduce(
    (acc, el) => (el.type === "main" ? acc + el.price : acc),
    0
  );
  const BurgerMainItem = ({ data, blocked, first }: any) => {
    const styleItem = {
      borderRadius: blocked
        ? first
          ? "88px 88px 40px 40px"
          : "40px 40px 88px 88px"
        : "40px",
    };

    return (
      <div style={styleItem} className="burger-constructor__item">
        {!blocked && (
          <span className="burger-constructor__item-dd-btn">
            <DragIcon type="primary" />
          </span>
        )}
        <img
          className="burger-constructor__item-img"
          src={data.image_mobile}
          alt="картинка ингредиента"
        />
        <p className="burger-constructor__item-name">{data.name}</p>
        <div className="burger-constructor__item-options">
          <p className="text_type_digits-default burger-constructor__item-price">
            {data.price}
          </p>
          <span className="burger-constructor__item-icon-price">
            <CurrencyIcon type="primary" />
          </span>
          {blocked ? (
            <span className="burger-constructor__item-icon-lock">
              <LockIcon type="secondary" />
            </span>
          ) : (
            <span className="burger-constructor__item-icon-trash">
              <img src={TrashIcon} alt="иконка для удаления элемента" />
            </span>
          )}
        </div>
      </div>
    );
  };
  const bunData = burgerData.find((el) => el.type === "bun");
  const totalPriceWithBun = bunData?.price || 0;
  return (
    <div className="burger-constructor">
      <div className="burger-constructor__items">
        <BurgerMainItem data={bunData} blocked={true} first={true} />
        <div className="burger-constructor__items-main">
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
      <div className="burger-constructor__total">
        <span className="burger-constructor__toral-price-content">
          <p className="text_type_digits-default burger-constructor__toral-price">
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
