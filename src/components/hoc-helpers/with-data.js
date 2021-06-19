import React from 'react';

import LoadingSpinner from '../loading-spinner';
import ErrorBoundry from '../error-boundry';

const withData = (View, getData, idList) => {
  return class extends React.Component {

    state = {
      loading: true,
      data: null
    };

    componentDidMount() {
      getData(idList)
        .then(data => this.updateData(data))
        .catch(err => console.log(err.Message));
    }

    updateData = (data) => {
      this.setState({
        loading: false,
        data
      })
    };

    render() {

      const { loading, data } = this.state;

      const loadingSpinner = loading ? <LoadingSpinner /> : null;
      const content = loading ? null : <View {...this.props} data={data}/>

      return (
        <React.Fragment>
          <ErrorBoundry>
            {loadingSpinner}
            {content}
          </ErrorBoundry>
        </React.Fragment>
      );
    }
  }
};


export default withData;