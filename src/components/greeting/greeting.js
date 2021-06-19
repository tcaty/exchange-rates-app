import React from 'react';

import './greeting.css';


const Greeting = () => {
  return (
    <div className="greeting">
      <div className="greeting__title">
        <h1>
          Приветствуем вас, пользователь! <br />
          На данном сайте вы найдёте много информации о валютах, а также сможете воспользоваться полезными
          инструментами.
        </h1>
      </div>
    </div>
  )
};


export default Greeting;