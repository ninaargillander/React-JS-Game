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
    this.startGame = this.startGame.bind(this);
    this.callbackAddPlayers = this.callbackAddPlayers.bind(this);
    this.incrementPlayerNum = this.incrementPlayerNum.bind(this);
  }

  callbackAddPlayers(thePlayers) {
    this.setState({ players: thePlayers });
  }

  incrementPlayerNum() {
    this.setState((value) => {
      return { playerNum: this.state.playerNum + 1 }
    });

    console.log('Players:' + this.state.players)
  }

  setCardNum() {
    //increment cardNum
    this.setState((value) => {
      return { cardNum: this.state.cardNum + 1 }
    });
    console.log(this.state.cardNum);
  }

  startGame(num) {
    this.setState({ gameView: num });
  }

  render() {
    let card = require('./cardInfo.json');

    // Check if 0 players, then add players in startScreen
    if (this.state.gameView === 0) {
      return (
        <div>
          <StartScreen
            startGame={this.startGame}
            callbackAddPlayers={this.callbackAddPlayers}
            incrementPlayerNum={this.incrementPlayerNum}
            playerNum={this.state.playerNum} />
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