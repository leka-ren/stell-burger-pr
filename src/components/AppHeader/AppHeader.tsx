import styleAppHeader from "./AppHeader.module.css";
import {
  Logo,
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={styleAppHeader.appHeader}>
      <nav>
        <ul className={styleAppHeader.appHeader__elements}>
          <li className={styleAppHeader.appHeader__element}>
            <BurgerIcon type="primary" />
            <p className={styleAppHeader.appHeader__elemntText}>
              Конструктор
            </p>
          </li>
          <li className={styleAppHeader.appHeader__element}>
            <ListIcon type="secondary" />
            <p className={styleAppHeader.appHeader__elemntText}>
              Лента Заказов
            </p>
          </li>
        </ul>
      </nav>
      <span style={{ marginLeft: "-135px" }}>
        <Logo />
      </span>
      <div className={styleAppHeader.appHeader__element}>
        <ProfileIcon type="secondary" />
        <p className={styleAppHeader.appHeader__elemntText}>
          Личный кабинет
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
