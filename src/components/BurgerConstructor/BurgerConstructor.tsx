import "./BurgerConstructor.css";
import burgerData from "../../const/burgerData";
import {
  CurrencyIcon,
  LockIcon,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import TrashIcon from "../../images/TrashIcon.svg";

function BurgerConstructor() {
  const BurgerMainItem = ({ data, blocked }: any) => {
    const styleItem = {
      borderRadius: blocked ? "88px 88px 40px 40px" : "40px",
    };
    return (
      <div style={styleItem} className="burger-constructor__item">
        {!blocked && <DragIcon type="primary" />}
        <img src={data.image_mobile} alt="картинка ингредиента" />
        <p>{data.name}</p>
        <div>
          <p>{data.price}</p>
          <CurrencyIcon type="primary" />
          {blocked ? (
            <LockIcon type="secondary" />
          ) : (
            <img src={TrashIcon} alt="иконка для удаления элемента" />
          )}
        </div>
      </div>
    );
  };
  const bunData = burgerData.find((el) => el.type === "bun");
  console.log(bunData);
  return (
    <div className="burger-constructor">
      <div className="burger-constructor__items">
        <BurgerMainItem data={bunData} blocked={true} />
        <div className="burger-constructor__items-main">
          {burgerData.map(
            (el) =>
              el.type === "main" && (
                <BurgerMainItem key={el._id} data={el} blocked={false} />
              )
          )}
        </div>
        <BurgerMainItem data={bunData} blocked={true} />
      </div>
      <div className="burger-constructor__total">
        <p className="burger-constructor__toral-price"></p>
        <button></button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
