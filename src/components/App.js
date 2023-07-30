import React from 'react'; 
import Header from './landing/Header'; // прошу любить и жаловать компонент header
import Bed from './landing/Bed' // и окажите компоненту bed тёплый приём
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Bed />
    </div>
  );
}

export default App;