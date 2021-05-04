import { useEffect, useState } from "react";
import stylesApp from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";

function App() {
  const [ingredientsData, setIngredientsData] = useState<any>([]);
  const [showModal, setShowModal] = useState(true);
  const [typeModalWindow, setTypeModalWindow] = useState('');

  const urlDataIngredients = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    fetch(urlDataIngredients)
      .then((res) => res.json())
      .then((data) => {
        setIngredientsData(data);
      })
      .catch((e) => setIngredientsData(e));
  }, []);

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      <section className={stylesApp.app__content}>
        <div className={stylesApp.app__burgersContent}>
          {ingredientsData.error ? (
            <div>
              <p className="text_type_main-large">Что-то пошло не так</p>
            </div>
          ) : ingredientsData.data ? (
            <>
              <BurgerIngredients typeModalWindow={setTypeModalWindow} showModal={setShowModal} burgerData={ingredientsData} />
              <BurgerConstructor typeModalWindow={setTypeModalWindow} showModal={setShowModal} burgerData={ingredientsData} />
            </>
          ) : (
            <div>
              <p className="text_type_main-large">Идет загрузка ингредиентов...</p>
            </div>
          )}
        </div>
      </section>
      {showModal && typeModalWindow === "Order Information" && <OrderDetails showModal={setShowModal} />}
    </div>
  );
}

export default App;
