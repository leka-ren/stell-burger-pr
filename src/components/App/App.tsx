import stylesApp from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={stylesApp.app}>
      <AppHeader />
      <section className={stylesApp.app__content}>
        <p className={stylesApp.app__contentTitle}>Соберите Бургер</p>
        <div className={stylesApp.app__burgersContent}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </section>
    </div>
  );
}

export default App;
