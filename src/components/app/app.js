import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import {
  GreetingPage,
  CurrenciesRatesPage,
  CurrencyDetailsPage,
  CurrnecyConverterPage,
} from '../pages';

import './app.css';



const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app__main">
          <Route path="/" component={GreetingPage} exact/>
          <Route path="/currencies-rates/" component={CurrenciesRatesPage}/>
          <Route
            path={"/currency-details/:charCode"}
            render={({ match }) => {
              const { charCode } = match.params;
              return <CurrencyDetailsPage charCode={charCode}/>
            }} />
          <Route path={"/currency-converter/"} component={CurrnecyConverterPage}/>
        </main>
      </Router>
    </div>
  );
};


export default App;
