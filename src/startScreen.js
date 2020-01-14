import React, { Component } from 'react';
import Player from './player.js';


class StartScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerNum: 0,
      playerName: '',
      players: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendPlayers = this.sendPlayers.bind(this);
  }

  sendPlayers() {
    this.props.callbackAddPlayers(this.state.players);
  }

  handleSubmit(event) {
    let player = new Player(this.state.playerName, this.state.playerNum);
    this.state.players.push(player);
    // this.props.addPlayer(this.state.playerName);
    //this.props.startGame(1);
    this.setState({ playerName: '' });

    this.setState((value) => {
      return { playerNum: this.state.playerNum + 1 }
    });

    this.props.incrementPlayerNum();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }



  render() {
    return (
      <div className="inputBox">
        <h1 className="headerForm">Vem är med?</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <p> Namn!</p>
          <input className="formInput" type="text"
            placeholder={`Spelare  ${this.state.playerNum + 1}`}
            value={this.state.playerName}
            onChange={this.handleChange} />
          <br />
          <button className="button addPlayer" type="submit"> + </button>
        </form>

        <button
          className="button letsPlay"
          disabled={this.state.playerNum === 0 || this.state.playerNum === 1}
          onClick={() => { this.sendPlayers(); this.props.startGame(1); }}>Let's play!</button>

      </div>
    )
  }
}

export default StartScreen;