import React, { Component } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { withData } from '../hoc-helpers';
import CbrXmlDailyService from '../../services/cbr-xml-daily-service';

import './drop-down-currency-menu.css';


const cbrXmlDailyService = new CbrXmlDailyService();


class DropDownCurrencyMenu extends Component {
  state = {
    isVisible: false
  };

  onMenuClick = () => {
    this.setState(({ isVisible }) => {
      return { isVisible: !isVisible }
    })
  };

  getRenderedCurrencyMenuItems = () => {
    if (!this.state.isVisible) {
      return null;
    }

    const { data, onItemSelected } = this.props; 
    return data.map((charCode, index) => {
      return <CurrencyMenuItem charCode={charCode} onItemSelected={() => onItemSelected(charCode)} key={index}/>
    });
  }

  render() {
    const { isVisible } = this.state;
    const { selectedCurrency } = this.props;
    
    return (
      <div className="drop-down-currency-menu">
        <menu className="drop-down-currency-menu__currency-menu currency-menu">
          <CurrencyMenuButton 
            isVisible={isVisible} 
            selectedCurrency={selectedCurrency} 
            onClick={this.onMenuClick}/>
          <ul className="currency-menu__items" onClick={this.onMenuClick}>
            {this.getRenderedCurrencyMenuItems()}
          </ul>
        </menu>
      </div>
    );
  }
}


const CurrencyMenuButton = ({ isVisible, selectedCurrency, onClick }) => {
  const buttonText = selectedCurrency !== null ? selectedCurrency : 'Выберите валюту';
  const buttonIcon = isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />;

  return (
    <button className="currency-menu__toggle-button toggle-button" type="button" onClick={onClick}>
      <span className="toggle-button__text">{buttonText}</span>
      <span className="toggle-button__icon">{buttonIcon}</span>
    </button>
  );
};


const CurrencyMenuItem = ({charCode, onItemSelected}) => {  
  return (
    <li className="currency-menu__item" onClick={onItemSelected}>
      {charCode}      
    </li>
  );
};


export default withData(DropDownCurrencyMenu, cbrXmlDailyService.getAllCurrenciesCharCode);