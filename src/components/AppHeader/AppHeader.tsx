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
      <nav className={styleAppHeader.appHeader__nav}>
        <ul className={styleAppHeader.appHeader__elements}>
          <li className={styleAppHeader.appHeader__element}>
            <BurgerIcon type="primary" />
            <p className={styleAppHeader.appHeader__elemntText + ' text_type_main-default'}>
              Конструктор
            </p>
          </li>
          <li className={styleAppHeader.appHeader__element}>
            <ListIcon type="secondary" />
            <p className={styleAppHeader.appHeader__elemntText + ' text_type_main-default'}>
              Лента Заказов
            </p>
          </li>
        </ul>
      </nav>
      <span className={styleAppHeader.appHeader__logo}>
        <Logo />
      </span>
      <div className={styleAppHeader.appHeader__element}>
        <ProfileIcon type="secondary" />
        <p className={styleAppHeader.appHeader__elemntText + ' text_type_main-default'}>
          Личный кабинет
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
