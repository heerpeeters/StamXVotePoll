import React, { Component } from 'react';
import logo from './img/stamx.jpg';
import './App.css';
import Facebook from './components/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welkom bij de Stam X peiling voor de federale verkiezingen van 26 mei 2019 tst
          </p>
        <Facebook/>
        </header>
      </div>
    );
  }
}


export default App;
