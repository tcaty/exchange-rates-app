import React from 'react';

import './title.css';


const Title = () => {
  return (
    <header className="title">
      <h1 className="title__text">Курсы валют ЦБ РФ на
        <span className="title__date"> {new Date().toLocaleDateString()}</span>
      </h1>
    </header>
  )
};


export default Title;