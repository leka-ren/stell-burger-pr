import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <section className="app__content">
        <p className="app__content-title text_type_main-large">Соберите Бургер</p>
        <div>
          <BurgerIngredients />
        </div>
      </section>
    </div>
  );
}

export default App;
