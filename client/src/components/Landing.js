import React from 'react';
import img from './zombie.png'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Почтольер!
      </h1>
      Отправь почту и получи фидбек от тех, кто осмелился эту почту прочитать
    <div>
      <img src={img} />
    </div>
    </div>
  );
};

export default Landing
