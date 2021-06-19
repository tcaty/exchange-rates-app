import React from 'react';

import ErrorBoundry from '../error-boundry';


const withErrorBoundry = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <ErrorBoundry>
          <Component {...this.props}/>
        </ErrorBoundry>
      )
    }
  }
};


export default withErrorBoundry;