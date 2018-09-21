import React, { Component } from 'react';
import BarChart from './grafica.js'
import './App.css';

class App extends Component {
    
  render() {
   return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to eskeleto</h1>
          <BarChart/>
          <div id="vis"></div>
        </header>
      </div>
    );
  }
}

export default App;
