import React from 'react';

import './error-message.css';


const ErrorMessage = () => {
  return (
    <div className="error-message">
      <div className="error-message__text">Ошибка сервера</div>
      <img src="https://img.icons8.com/ios/2x/database-error.png" className="error-message__icon" alt="error-message-icon"/>
    </div>
  );
};


export default ErrorMessage;