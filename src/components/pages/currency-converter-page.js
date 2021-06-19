import React from 'react';

import CurrencyConverterTitle from '../currency-converter-title';
import CurrencyConverter from '../currency-converter';

import { withErrorBoundry } from '../hoc-helpers';


const CurrnecyConverterPage = () => {
  return (
    <React.Fragment>
      <CurrencyConverterTitle />
      <CurrencyConverter />
    </React.Fragment>
  );
};


export default withErrorBoundry(CurrnecyConverterPage);