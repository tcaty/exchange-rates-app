import React, { Component } from 'react';

import { withErrorBoundry } from '../hoc-helpers';
import CbrXmlDailyService from '../../services/cbr-xml-daily-service';

import './currency-details.css';


class CurrencyDetails extends Component {

  state = {
    name: null,
    mouseOnCurrencyName: false,
  };

  componentDidMount() {
    const cbrXmlDailyService = new CbrXmlDailyService();
    const { charCode } = this.props;

    cbrXmlDailyService.getCurrencyNameByCharCode(charCode)
      .then(name => {
        this.setState({ name })
      })
      .catch(err => console.log(err.Message));
  }

  onMouseHover = () => {
    this.setState(({ mouseOnCurrencyName }) => {
      return {
        mouseOnCurrencyName: !mouseOnCurrencyName
      }
    })
  }

  getClassesForCurrencyName = () => {
    const classes = ['currency-details__name'];
    if (this.state.mouseOnCurrencyName) {
      classes.push('currency-details__name_mouse-on');
    }
    return classes.join(' ');
  }

  render() {
    const { charCode } = this.props;
    const { name } = this.state;
    const imgPath = `https://www.finversia.ru/site/public/elfinder/img/Currency/x${charCode}_01.jpg.pagespeed.ic.EU79KkVj6d.jpg`;
    const href = `https://www.banki.ru/products/currency/${charCode.toLowerCase()}/`

    return (
      <div className="currency-details">
        <div className="currency-details__text text">
          Фотографии купюр и монет валюты
          <a 
            href={href} 
            rel="noreferrer" 
            target="_blank" 
            className={this.getClassesForCurrencyName()}
            onMouseEnter={this.onMouseHover}
            onMouseLeave={this.onMouseHover}>
            "{name}"
          </a>
          <div className="text__note">
            При нажатии на название валюты откроется новая вкладка с динамикой её курса
          </div>
        </div>
        <div className="currency-details__img">
          <img src={imgPath} alt="currency"/>
        </div>
      </div>
    );
  }
}


export default withErrorBoundry(CurrencyDetails);