import React, { Component } from 'react';
import StartScreen from './startScreen.js';
import Card from './card.js';
import './card.scss';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNum: 0,
      players: [],
      cardNum: 0,
    };

    this.setCardNum = this.setCardNum.bind(this);
  }

  setCardNum() {
    this.setState((value) => {
      return { cardNum: this.state.cardNum + 1 }
    });
    console.log(this.state.cardNum);
  }

  startGame(users) {
    this.setState({ playerNum: users });
  }

  render() {
    let card = require('./cardInfo.json');

    // Check if 0 players, then add players in startScreen
    if (this.state.playerNum === 0 && this.state.playerNum !== this.state.players.length) {
      return (<StartScreen players={this.state.players} />)
    } else

      return (
        <div>
          <Card dareText={card[this.state.cardNum].dare} darePoints={card[this.state.cardNum].pointsDare}
            drinks={card[this.state.cardNum].drinks} drinkPoints={card[this.state.cardNum].pointsDrinks}
            action={this.setCardNum} />
        </div>
      );
  }
}

export default Game;
