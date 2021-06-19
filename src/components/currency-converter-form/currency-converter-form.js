import React, { Component } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { withErrorBoundry } from '../hoc-helpers';

import './currency-converter-form.css';


class CurrencyConverterForm extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    this.props.setNumberToConvert(Number(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <form className="currency-converter-form" onSubmit={this.handleSubmit}>
        <div className="currency-converter-form__input">
          <input 
            type="text"
            value={this.state.value}
            maxLength="14"
            onChange={this.handleChange}/>
        </div>
        {this.props.children}
        <div className="currency-converter-form__convert-button convert-button">
          <button type="submit" onClick={this.props.convertCurrency}>
            <span className="convert-button__text">Конвертировать</span>
            <span className="convert-button__icon"><IoIosArrowForward /></span>
          </button>
        </div>
      </form>
    );
  }
}


export default withErrorBoundry(CurrencyConverterForm);


