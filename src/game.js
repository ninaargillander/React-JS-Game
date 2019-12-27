import React, { Component } from 'react';
import StartScreen from './startScreen.js';
import Player from './player.js'
import Card from './card.js';
import './card.scss';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNum: 0,
      players: [],
      cardNum: 0,
      gameView: 0
    };

    this.setCardNum = this.setCardNum.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  addPlayer(name) {
    let player = new Player(name);
    this.state.players.push(player);
  }

  setCardNum() {
    this.setState((value) => {
      return { cardNum: this.state.cardNum + 1 }
    });
    console.log(this.state.cardNum);
  }

  startGame(num) {
    this.setState({ playerNum: num });
  }

  render() {
    let card = require('./cardInfo.json');

    // Check if 0 players, then add players in startScreen
    if (this.state.playerNum === 0) {
      return (
        <div>
          <StartScreen addPlayer={this.addPlayer} startGame={this.startGame} />
        </div>
      )
    }
    console.log(this.state.players);
    return (

      < div >
        <Card dareText={card[this.state.cardNum].dare} darePoints={card[this.state.cardNum].pointsDare}
          drinks={card[this.state.cardNum].drinks} drinkPoints={card[this.state.cardNum].pointsDrinks}
          action={this.setCardNum} />
      </div >
    );
  }
}

export default Game;
