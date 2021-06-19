import React from 'react';

import { withErrorBoundry } from '../hoc-helpers';

import CurrencyDetails from '../currency-details';


const CurrencyDetailsPage = ({ charCode }) => {
  return (
    <React.Fragment>
      <CurrencyDetails charCode={charCode}/>
    </React.Fragment>
  );
};


export default withErrorBoundry(CurrencyDetailsPage);