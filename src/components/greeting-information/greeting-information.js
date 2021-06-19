import React from 'react';

import './greeting-information.css';



const GreetingInformation = () => {
  
  const infoBlocksCount = 4;
  const infoBlocks = Array(infoBlocksCount).fill(0).map((item, index) => <InfoBlock key={index}/>);

  return (
    <div className="greeting-information">
      <div className="greeting-information__title">
        <h2>Подсказка для пользователя</h2>
      </div>
      <div className="greeting-information__content">
        {infoBlocks}    
      </div>
    </div>
  )
};

const InfoBlock = () => {
  return (
    <div className="greeting-information__info-block info-block">
      <h3 className="info-block__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </h3>
      <div className="info-block__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi facere, accusantium voluptatibus cum pariatur voluptates eaque itaque. Aperiam ratione dolore facilis enim quia voluptatem. Rem fuga, qui minus eaque sit sed doloremque corporis deleniti quisquam! Nemo ullam atque voluptates!
      </div>
    </div>
  );
};


export default GreetingInformation;