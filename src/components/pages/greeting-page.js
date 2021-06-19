import React from 'react';

import { withErrorBoundry } from '../hoc-helpers';

import Greeting from '../greeting';
import PhotoSlider from '../photo-slider';
import GreetingInformation from '../greeting-information';


const GreetingPage = () => {
  return (
    <React.Fragment>
      <Greeting />
      <PhotoSlider />
      <GreetingInformation />
    </React.Fragment>
  );
};


export default withErrorBoundry(GreetingPage);