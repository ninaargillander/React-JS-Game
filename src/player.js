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
    console.log('in addPoints');
    this.state.points = this.state.points + x;
  }
}

export default Player;
