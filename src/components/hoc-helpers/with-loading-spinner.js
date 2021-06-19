import React, { Component } from 'react';

import LoadingSpinner from '../loading-spinner';


const withLoadingSpinner = (Wrapped) => {
  return class extends Component {
    state = {
      loading: true
    }

    updateLoading = () => {
      this.setState({ loading: false })
    }

    componentDidMount() {
      this.updateLoading();
    }

    render() {
      const { loading } = this.state;
      const content = loading ? null : <Wrapped {...this.props}/>;
      const loadingSpinner = loading ? <LoadingSpinner /> : null;

      return (
        <React.Fragment>
          {loadingSpinner}
          {content}
        </React.Fragment>
      )
    }
  }
};


export default withLoadingSpinner;