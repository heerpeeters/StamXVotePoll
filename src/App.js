import React, { Component } from 'react';
import logo from './img/stamx.png';
import './App.css';
import Facebook from './components/Facebook';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welkom bij de Stam X peiling voor de federale verkiezingen van 26 mei 2019
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        <Facebook/>
        </header>
      </div>
    );
  }
}


export default App;
