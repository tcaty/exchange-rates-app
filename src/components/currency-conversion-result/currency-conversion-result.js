import React, { Component } from 'react';
import { FaEquals } from 'react-icons/fa';

import WrongDataToConvertMessage from '../wrong-data-to-convert-message';
import { withErrorBoundry } from '../hoc-helpers';

import './currency-conversion-result.css';


class CurrencyConversionResult extends Component {
  
  state = {
    currencyChangedWithoutNumberChanged: false
  }

  checkCorrectDataToConvert = (selectedCurrency, numberToConvert, conversionResult) => {
    if (typeof(conversionResult) !== typeof(1) || typeof(numberToConvert) !== typeof(1) || isNaN(numberToConvert) || typeof(selectedCurrency) === typeof(1) || isNaN(conversionResult)) {
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.numberToConvert === nextProps.numberToConvert && this.props.selectedCurrency !== nextProps.selectedCurrency) {
      this.setState({ currencyChangedWithoutNumberChanged: true})
    }
    else {
      this.setState({ currencyChangedWithoutNumberChanged: false })
    }
  }

  transformConversionResult = (conversionResult) => {
    conversionResult = String(conversionResult);
    const excessSymbolsCount = conversionResult.slice(conversionResult.indexOf('.') + 1).length - 4;
    if (excessSymbolsCount <= 0) {
      return conversionResult;
    }
    return conversionResult.slice(0, conversionResult.length - excessSymbolsCount);
  }

  render() {
    const { selectedCurrency, numberToConvert, conversionResult } = this.props;

    if (this.state.currencyChangedWithoutNumberChanged) {
      return null;
    }

    if (!this.checkCorrectDataToConvert(selectedCurrency, numberToConvert, conversionResult)) {
      return <WrongDataToConvertMessage />
    }

    return (
      <div className="currency-convertsion-result">
        <div className="currency-convertsion-result__result-title result-title">
          <span className="result-title__number">Результат перевода</span>
          <span className="result-title__currency"> {selectedCurrency}</span> в 
          <span className="result-title__currency"> RUB</span>
        </div>
        <div className="currency-convertsion-result__result result">
          <span className="result__number">{numberToConvert}</span>
          <span className="result__valute">{selectedCurrency}</span>
          <span className="result__separator"><FaEquals /></span>
          <span className="result__number">{this.transformConversionResult(conversionResult)}</span>
          <span className="result__valute">RUB</span>
        </div>
      </div>
    );
  }
}


export default withErrorBoundry(CurrencyConversionResult);
