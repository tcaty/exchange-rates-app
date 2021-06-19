import React from 'react';

import CbrXmlDailyService from '../../services/cbr-xml-daily-service';
import CurrencyRate from '../currency-rate';
import CurrenciesRatesHeader from '../currencies-rates-header';
import WithData from '../hoc-helpers/with-data';
import WithErrorBoundry from '../hoc-helpers/with-error-boundry';

import './currencies-rates-list.css';


const cbrXmlDailyService = new CbrXmlDailyService();

const CurrenciesRatesList = ({ data }) => {
  
  const renderedCurrencies = data.map((currency, index) => {
    return <CurrencyRate {...currency} key={index}/>;
  })

  return (
    <div className="currencies-rates-list">
      <div className="currencies-rates-list__container">
        <CurrenciesRatesHeader />
        {renderedCurrencies}
      </div>
    </div>
  );
};


const CurrenciesRatesListWithData = WithData(CurrenciesRatesList, cbrXmlDailyService.getAllCurrencies);
export default WithErrorBoundry(CurrenciesRatesListWithData);