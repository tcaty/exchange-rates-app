import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

import './wrong-data-to-convert-message.css';


const WrongDataToConvertMessage = () => {
  return (
    <div className="wrong-data-to-convert-message">
      <div className="wrong-data-to-convert-message__message-content">
        <div className="message-content__text-with-icon text-with-icon">
          <span className="text-with-icon__text">Невозможно конвертировать валюту</span>
          <span className="text-with-icon__icon"><MdErrorOutline /></span>
        </div>
        <div className="message-content__text">
          Проверьте правильность введённых данных.
        </div>
      </div>
    </div>
  );
};


export default WrongDataToConvertMessage;
