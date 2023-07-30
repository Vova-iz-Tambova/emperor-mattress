// компонент Header теперь в Header.js

import React from 'react';
import './Header.css' // импортируем CSS-файл

function Header() {
  return (
    <h1 className="header-title">Империя матрасов</h1> // применяем класс
  );
}

export default Header;