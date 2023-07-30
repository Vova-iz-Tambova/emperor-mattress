import React from 'react';
import './Bed.css';
import bedPath from '../../images/bed.svg'; // Путь к изображению внутри сборки

function Bed() {
  return (
    <img className="bed-logo" alt='A comfortable bed' src={bedPath}/>
  );
}

export default Bed;