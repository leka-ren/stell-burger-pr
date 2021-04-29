import "./AppHeader.css";
import {
  Logo,
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <ul className="app-header__elements">
          <li className="app-header__element">
            <BurgerIcon type="primary" />
            <p className="app-header__elemnt-text text_type_main-default">
              Конструктор
            </p>
          </li>
          <li className="app-header__element">
            <ListIcon type="secondary" />
            <p className="app-header__elemnt-text text_type_main-default">
              Лента Заказов
            </p>
          </li>
        </ul>
      </nav>
      <span style={{ marginLeft: "-135px" }}>
        <Logo />
      </span>
      <div className="app-header__element">
        <ProfileIcon type="secondary" />
        <p className="app-header__elemnt-text text_type_main-default">
          Личный кабинет
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
