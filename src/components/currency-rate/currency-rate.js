import React from 'react';
import { Link } from 'react-router-dom';

import './currency-rate.css';


export default class CurrencyRate extends React.Component {

  state = {
    mouseOnCurrency: false,
    showCurrencyValue: true,
  };

  updateMouseOnCurrency = () => {
    this.setState(({ mouseOnCurrency }) => {
      return {
        mouseOnCurrency: !mouseOnCurrency
      };
    })
  };

  updateShowCurrencyValue = () => {
    this.setState(({ showCurrencyValue }) => {
      return {
        showCurrencyValue: !showCurrencyValue
      };
    })
  };

  getCurrentClasses = ({ increased }) => {
    const classes = ['currency-rate__row'];
    if (this.state.mouseOnCurrency) {
      classes.push('currency-rate__row_hover');
      if (increased) {
        classes.push('currency-rate__row_increased');
      }
      else {
        classes.push('currency-rate__row_fell');
      }
    }
    return classes.join(' ');
  };

  render() {
    const rate = this.state.showCurrencyValue ? this.props.value : this.props.change;
    return (
      <div className={this.getCurrentClasses(this.props)}
           onMouseEnter={this.updateMouseOnCurrency}
           onMouseLeave={this.updateMouseOnCurrency}>
        <CurrencyRateView {...this.props} rate={rate} onCurrencyRateClick={this.updateShowCurrencyValue}/>
      </div>
    );
  }
};

const CurrencyRateView = ({ numCode, charCode, nominal, name, rate, onCurrencyRateClick }) => {
  return (
    <React.Fragment>
      <div className="currency-rate__num-code">{numCode}</div>
      <div className="currency-rate__char-code">{charCode}</div>
      <div className="currency-rate__nominal">{nominal}</div>
      <Link to={`/currency-details/${charCode}`}>
        <div className="currency-rate__name">{name}</div>
      </Link>
      <div className="currency-rate__rate" onClick={onCurrencyRateClick}>{rate}</div>
    </React.Fragment>
  );
};
