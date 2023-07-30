import React from 'react';
import Header from './landing/Header';
import Bed from './landing/Bed';
import InfoForm from './landing/InfoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Bed />
      <InfoForm />
    </div>
  );
}

export default App;