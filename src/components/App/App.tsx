import stylesApp from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useEffect, useState } from "react";

function App() {
  const [ingredientsData, setIngredientsData] = useState<any>([]);

  const urlDataIngredients =
    "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    fetch(urlDataIngredients)
      .then((res) => res.json())
      .then((data) => {
        setIngredientsData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      <section className={stylesApp.app__content}>
        <div className={stylesApp.app__burgersContent}>
          {ingredientsData.error ? (
            <div>
              <p>Что-то пошло не так</p>
            </div>
          ) : ingredientsData.data ? (
            <>
              <BurgerIngredients {...ingredientsData} />
              <BurgerConstructor {...ingredientsData} />
            </>
          ) : (
            <div>
              <p>Идет загрузка ингредиентов...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
