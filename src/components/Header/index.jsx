import React from 'react';
import Link from 'gatsby-link';
import { NavLink } from 'react-router-dom';
import style from './index.module.scss';

const Header = () => (
  <div className={style.header}>
    <div className={style.header__title}>
      <h1 className={style.title}>
        <Link to="/" className={style.title__link}>Miss Kelly's Room</Link>
      </h1>
    </div>
    <nav className={style.menu}>
      <NavLink
        to="/english/"
        className={style.menu__item}
        activeClassName={style.menu__active}
      >
        English
      </NavLink>
      <NavLink
        to="/math/"
        className={style.menu__item}
        activeClassName={style.menu__active}
      >
        Math
      </NavLink>
      <NavLink
        to="/science/"
        className={style.menu__item}
        activeClassName={style.menu__active}
      >
        Science
      </NavLink>
    </nav>
  </div>
);

export default Header; 
