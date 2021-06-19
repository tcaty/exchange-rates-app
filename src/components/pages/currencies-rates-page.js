import React from 'react';

import Title from '../title';
import MainCurrencies from '../main-currencies';
import LastUpdate from '../last-update';
import CurrenciesRatesList from '../currencies-rates-list';

import { withErrorBoundry } from '../hoc-helpers';


const CurrenciesRatesPage = () => {
  return (
    <React.Fragment>
      <Title />
      <MainCurrencies />
      <LastUpdate />
      <CurrenciesRatesList />
    </React.Fragment>
  );
};


export default withErrorBoundry(CurrenciesRatesPage);