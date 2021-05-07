import { useEffect, useState } from "react";

import stylesApp from "./App.module.css";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function App() {
  const [ingredientsData, setIngredientsData] = useState<any>([]);
  const [showModal, setShowModal] = useState(true);
  const [typeModalWindow, setTypeModalWindow] = useState("");
  const [currentDataIngredients, setCurrentDataIngredients] = useState({});

  const urlDataIngredients = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(urlDataIngredients);
        if (!response.ok) throw new Error("Что-то пошло не так");
        const data = await response.json();
        setIngredientsData(data);
      } catch (e) {
        setIngredientsData(e);
      }
    })();
  }, []);

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      <section className={stylesApp.app__content}>
        <div className={stylesApp.app__burgersContent}>
          {ingredientsData.message ? (
            <div>
              <p className="text_type_main-large">Что-то пошло не так</p>
            </div>
          ) : ingredientsData.data ? (
            <>
              <BurgerIngredients currentDataIngredients={setCurrentDataIngredients} typeModalWindow={setTypeModalWindow} showModal={setShowModal} burgerData={ingredientsData} />
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
      {showModal && typeModalWindow === "Ingredients information" && <IngredientDetails showModal={setShowModal} dataIngredients={currentDataIngredients} />}
    </div>
  );
}

export default App;
