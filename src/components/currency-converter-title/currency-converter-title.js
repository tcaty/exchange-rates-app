import React from 'react';
import { GrCurrency } from 'react-icons/gr';

import './currency-converter-title.css';


const CurrencyConverterTitle = () => {
  return (
    <div className="currency-converter-title">
      <div className="currency-converter-title__title">
        <h1>Конвертер валют</h1>
        <GrCurrency />
      </div>
      <div className="currency-converter-title__note">
        С помощью данного конвертера вы сможете перевести любую валюту в рубли
      </div>
    </div>
  );
};


export default CurrencyConverterTitle;
