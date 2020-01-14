import React, { Component } from 'react';

class Player extends Component {
  constructor(name, id) {
    super();

    this.state = {
      name: name,
      points: 0,
      color: '',
      id: id,
    }

    this.addPoints = this.addPoints.bind(this);
  }

  addPoints(x) {
    //should use setState
    //this.setState({ points: this.state.points + x })
    this.state.points = this.state.points + x;
  }
}

export default Player;
