import React from 'react';

import './currencies-rates-header.css';


const CurrenciesRatesHeader = () => {
  return (
    <div className="currencies-rates-header__row">
      <div className="currencies-rates-header__num-code">Циф. код</div>
      <div className="currencies-rates-header__char-code">Букв. код</div>
      <div className="currencies-rates-header__nominal">Единиц</div>
      <div className="currencies-rates-header__name">Валюта</div>
      <div className="currencies-rates-header__rate">Курс</div>
    </div>
  );
};


export default CurrenciesRatesHeader;