import React, { Component } from 'react';
import Game from './game.js';
import './App.css';
//import StartScreen from './startScreen.js';

/* npm install:
   node-sass

*/

class App extends Component {

  render() {

    return (

      <div>
        <Game />
      </div>
    )
  }
}

export default App;
