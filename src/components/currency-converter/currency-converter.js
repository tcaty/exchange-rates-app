import React, { Component } from 'react';
import { FaEquals } from 'react-icons/fa';

import CbrXmlDailyService from '../../services/cbr-xml-daily-service';
import { withErrorBoundry } from '../hoc-helpers';

import CurrencyConversionResult from '../currency-conversion-result';
import CurrencyConverterForm from '../currency-converter-form';
import DropDownCurrencyMenu from '../drop-down-currency-menu';

import './currency-converter.css';


class CurrencyConverter extends Component {

  state = {
    selectedCurrency: null,
    numberToConvert: null,
    conversionResult: null,
  }

  setSelectedCurrency = (selectedCurrency) => {
    this.setState({ selectedCurrency });
  }

  setNumberToConvert = (numberToConvert) => {
    this.setState({ numberToConvert });
  }

  setConversionResult = (currencyRate) => {
    this.setState(({ numberToConvert }) => {
      return { conversionResult: numberToConvert * currencyRate }
    })
  }

  convertCurrency = () => {
    const cbrXmlDailyService = new CbrXmlDailyService();
    cbrXmlDailyService.getCurrencyRateByCharCode(this.state.selectedCurrency)
      .then(currencyRate => this.setConversionResult(currencyRate))
      .catch(err => console.log(err))
  }

  getRenderedConversionResult = () => {
    const { selectedCurrency, numberToConvert, conversionResult } = this.state; 
    if (selectedCurrency === null || numberToConvert === null || conversionResult === null) {
      return null;
    }
    return <CurrencyConversionResult {...this.state}/>;
  }

  render() {
    return (
      <div className="currency-converter">
        <div className="currency-converter__row"> 
          <CurrencyConverterForm setNumberToConvert={this.setNumberToConvert} convertCurrency={this.convertCurrency}>
            <DropDownCurrencyMenu 
              onItemSelected={this.setSelectedCurrency} 
              selectedCurrency={this.state.selectedCurrency}
              newCurrencySelected={this.convertCurrency}/>
            <span className="currency-converter__icon"><FaEquals /></span>
            <span className="currency-converter__rub">RUB</span>  
          </CurrencyConverterForm>
        </div>
        <div className="currency-converter__row">
          {this.getRenderedConversionResult()}
        </div>
      </div>
    );
  }
}

export default withErrorBoundry(CurrencyConverter);


