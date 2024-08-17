import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Page_List } from "../../app/routes/AppRouter";
import './Header.scss'
import imgsLogo from '../../assets/images/idXzOief8j_1721200561539.png'
import Burger from "./Burger/Burger";

const Header: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="header__logo">
          <img src={imgsLogo} alt="" className="imgs__logo" />
        </NavLink>
        <nav className="header__menu">
          <NavLink to={Page_List.Section} className='header__link'>{t('LINK MOVIES')}</NavLink>
          <NavLink to={Page_List.People} className='header__link'>{t('LINK ACTORS')}</NavLink>
          <NavLink to={Page_List.About} className='header__link'>{t('LINK ABOUT')}</NavLink>
        </nav>
        <select className="header__language-switcher" onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>

        <Burger />
      </div>
    </header>
  );
};

export default Header;
