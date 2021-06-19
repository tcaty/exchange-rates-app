import React from 'react';

import CbrXmlDailyService from '../../services/cbr-xml-daily-service';
import withData from '../hoc-helpers/with-data';

import './main-currencies.css';


const cbrXmlDailyService = new CbrXmlDailyService();


const MainCurrencies = ({ data }) => {
  return (
    <div className="main-currencies">
      <MainCurrenciesView currencies={data}/>
    </div>
  );
};


const MainCurrenciesView = ({ currencies }) => {
  
  const renderedCurrencies = currencies.map((currency, index) => {

    const increasedIcon = 'https://img.icons8.com/pastel-glyph/2x/down.png';
    const fellIcon = 'https://img.icons8.com/pastel-glyph/2x/up.png';
    const icon = currency.increased ? increasedIcon : fellIcon;

    return (
      <div className="main-currencies__main-currency main-currency" key={index}>
        <span className="main-currency__name">{currency.name}</span>
        <span className="main-currency__separator">—</span>
        <span className="main-currency__rate"> {currency.value}</span> руб.
        <img className="main-currency__change" src={icon} alt="currency-change-icon"></img>
      </div>
    );
  });

  return (
    <React.Fragment>
      {renderedCurrencies}
    </React.Fragment>
  );
};

const mainCurrenciesId = ['R01235', 'R01239'];

export default withData(MainCurrencies, cbrXmlDailyService.getCurrenciesByIdList, mainCurrenciesId);


