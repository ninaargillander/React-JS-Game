import React, { Component } from 'react';

class Player extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.points = 0;
    this.color = '';
  }
}

export default Player;