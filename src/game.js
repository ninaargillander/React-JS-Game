import React, { Component } from 'react';
import StartScreen from './startScreen.js';
import Card from './card.js';
import LeaderBoard from './leaderBoard.js';
import './css/card.scss';
import './css/startScreen.scss';
import './css/leaderBoard.scss';
import './css/game.scss';

let card = require('./cardInfo.json');

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNum: 0,
      players: [],
      cardNum: 0,
      gameView: 0,
      currentPlayer: 0
    };

    this.nextTurn = this.nextTurn.bind(this);
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
  }

  nextTurn(button) {
    let pointsToAdd
    if (button === 0) { pointsToAdd = card[this.state.cardNum].pointsDare }
    if (button === 1) { pointsToAdd = card[this.state.cardNum].pointsDrinks }

    this.state.players[this.state.currentPlayer].addPoints(pointsToAdd);

    //increment cardNum and currentPlayer
    this.setState((value) => {
      return {
        cardNum: this.state.cardNum + 1,
        currentPlayer: this.state.currentPlayer + 1
      }
    });

    if (this.state.currentPlayer === this.state.playerNum - 1) {
      this.setState({ currentPlayer: 0 })
    }
    console.log('currentPlayer: ' + this.state.currentPlayer);
    console.log(this.state.players[this.state.currentPlayer].name)

  }

  startGame(num) {
    this.setState({ gameView: num });
  }

  render() {
    if (this.state.gameView === 0) {
      return (
        <div>
          <div><h1 className="header">Ninas Fantastiska Dryckesspel</h1></div>
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
      <div>
        <div><h1 className="header" >Ninas Fantastiska Dryckesspel</h1></div>
        <div className="container">
          <LeaderBoard players={this.state.players} />
          <Card
            player={this.state.players[this.state.currentPlayer]}
            dareText={card[this.state.cardNum].dare}
            darePoints={card[this.state.cardNum].pointsDare}
            drinks={card[this.state.cardNum].drinks}
            drinkPoints={card[this.state.cardNum].pointsDrinks}
            action={this.nextTurn} />
        </div>
      </div>
    );
  }
}

export default Game;