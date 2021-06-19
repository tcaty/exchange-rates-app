export default class CbrXmlDailyService {

  _url = 'https://www.cbr-xml-daily.ru/daily_json.js';

  _getCurrenciesData = async () => {
    const response = await fetch(this._url);
    if (!response.ok) {
      throw new Error(`Something wrong with fetch API ${this._url}`);
    }
    const data = await response.json();
    return data;
  };

  _getCurrencyById = async (id) => {
    const data = await this._getCurrenciesData();
    for (let currenciesCharCode in data.Valute) {
      const currency = data.Valute[currenciesCharCode];
      if (currency.ID === id) {
        return this._transformCurrencyToMain(currency);
      }
    }
  };

  getCurrenciesByIdList = async (idList) => {
    let currencies = [];
    for (let id of idList) {
      currencies.push(await this._getCurrencyById(id));
    }
    return currencies;
  };

  _transformCurrencyToMain = (currency) => {
    return {
      name: currency.Name,
      increased: Number(currency.Value) > Number(currency.Previous),
      value: currency.Value
    };
  };

  getLastUpdateDate = async () => {
    const data = await this._getCurrenciesData();
    const date = new Date(Date.parse(data.Date));
    return date.toLocaleString();
  };

  getAllCurrencies = async () => {
    const data = await this._getCurrenciesData();
    const currencies = [];
    for (let currenciesCharCode in data.Valute) {
      const currency = data.Valute[currenciesCharCode];
      currencies.push(this._transformCurrency(currency));
    }
    return currencies;
  };

  _transformCurrency = (currency) => {
    const change = Number(currency.Value) - Number(currency.Previous);
    return {
      numCode: currency.NumCode,
      charCode: currency.CharCode,
      nominal: currency.Nominal,
      name: currency.Name,
      value: this._transformCurrencyValue(currency.Value),
      change: this._transformCurrencyChange(change),
      increased: change > 0
    };
  };

  _transformCurrencyValue = (value) => {
    value = String(value);
    const spaces = ' '.repeat(8 - value.length);
    const symbolsCountAfterDoth = value.slice(value.indexOf('.') + 1).length;
    const zeroes = symbolsCountAfterDoth < 4 ? '0'.repeat(4 - symbolsCountAfterDoth) : '';
    return `${spaces}${value}${zeroes}`; 
  }

  _transformCurrencyChange = (change) => {
    if (change > 0) {
      change = ` +${String(change)}`;
    }
    else {
      const splitedChange = String(change).split('');
      splitedChange[0] = '–';
      change = ' ' + splitedChange.join('');
    }
    const transformedChange = change.slice(0, 8);
    return transformedChange;
  }

  getCurrencyNameByCharCode = async (charCode) => {
    const currencies = await this.getAllCurrencies();
    for (let currency of currencies) {
      if (currency.charCode === charCode) {
        return currency.name;
      }
    }
  }

  getAllCurrenciesCharCode = async () => {
    const currencies = await this.getAllCurrencies();
    return currencies.map(currency => currency.charCode);
  }

  getCurrencyRateByCharCode = async (charCode) => {
    const currencies = await this.getAllCurrencies();
    for (let currency of currencies) {
      if (currency.charCode === charCode) {
        return Number(currency.value) / Number(currency.nominal);
      }
    }
  }

  getTestData = async () => {
    const data = [];
    data.push({
      change: " -0.0675",
      charCode: "TJS",
      increased: true,
      name: "Тугрики",
      numCode: "972",
      value: " 64.5337",
    })
    return data;
  }
}