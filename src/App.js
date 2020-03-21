import React, { Component } from 'react';
import Game from './game.js';
import Test from './test.js';
import './App.css';

/* npm install:
   node-sass

*/

class App extends Component {
  render() {
    return (
      <div>
        <Test text={'Ninar'} />
        <Game />
      </div>
    );
  }
}

export default App;
