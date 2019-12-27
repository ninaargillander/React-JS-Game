import React, { Component } from 'react';
import Player from './player.js';


class StartScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numPlayers: 1,
      playerName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.addPlayer(this.state.playerName);
    this.props.startGame(1);
  }

  handleChange(event) {
    /*   const temp = event.target.value;
      this.setState({ numPlayers: temp }); */
    this.setState({
      playerName: event.target.value
    });

    console.log(this.state.numPlayers)
  }

  render() {
    return (
      <div>
        <h1>Hellooooo</h1>

        {/*  <form onSubmit={this.handleSubmit}>
          <label> Hur många spelar idag? <br />
            <input type="number" min="0" name="num" onChange={this.handleChange} />
          </label><br />
        </form> */}

        <form onSubmit={this.handleSubmit}>
          <label> Namn! <br />
            <input type="text" disabled={this.state.numPlayers === 0} value={this.state.playerName} onChange={this.handleChange} />
          </label><br />
          <input type="submit" value="Lägg till" />
        </form>


      </div>
    )
  }
}

export default StartScreen;
