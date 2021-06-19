import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


const Header = () => {
  return (
    <header className="app__header header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link to={"/"}>
              <img src="https://img.icons8.com/dotty/2x/currency.png" alt="logo"/>
            </Link>
          </div>
          <menu className="header__menu menu">
            <Link to={"/currencies-rates/"}>
              <span className="menu__item">Курсы валют</span>
            </Link>
            <Link to={"/currency-converter/"}>
              <span className="menu__item">Конвертер валют</span>
            </Link>
          </menu>
        </div>
      </div>
    </header>
  );
};


export default Header;

