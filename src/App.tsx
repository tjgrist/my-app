import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@aurodesignsystem/auro-datepicker"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <auro-datepicker>
          <span slot="label">Choose a date</span>
        </auro-datepicker>
      </header>
    </div>
  );
}

export default App;
