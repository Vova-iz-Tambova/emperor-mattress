//Bed.js

import React from 'react';
import bedPath from '../../images/bed.svg';
import './Bed.css' // импортируем CSS-файл

function Bed() {
  return (
      // не забудьте о `className`
    <img className="bed-logo" alt="A comfortable bed" src={bedPath}/> 
  );
}

export default Bed; 