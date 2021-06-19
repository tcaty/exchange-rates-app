import React from 'react';

import CbrXmlDailyService from '../../services/cbr-xml-daily-service';
import WithData from '../hoc-helpers/with-data';
import WithErrorBoundry from '../hoc-helpers/with-error-boundry';

import './last-update.css';


const cbrXmlDailyService = new CbrXmlDailyService();

const LastUpdate = ({ data }) => {
  return (
    <div className="last-update">
      <LastUpdateView lastUpdate={data}/>
    </div>
  );
};

const LastUpdateView = ({ lastUpdate }) => {
  return (
    <React.Fragment>
      <span className="last-update__text">Последнее обновление базы данных: </span>
      <span className="last-update__time">{lastUpdate}</span>
    </React.Fragment>
  );
};

const LastUpdateWithData = WithData(LastUpdate, cbrXmlDailyService.getLastUpdateDate);
export default WithErrorBoundry(LastUpdateWithData);



