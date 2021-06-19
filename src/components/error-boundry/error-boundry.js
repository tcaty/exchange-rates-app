import React from 'react';

import ErrorMessage from '../error-message';

import './error-boundry.css';


export default class ErrorBoundry extends React.Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true })
  };

  render() {
    const { error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const content = error ? null : this.props.children;

    return (
      <React.Fragment>
        {errorMessage}
        {content}
      </React.Fragment>
    );
  };
}
