import React, { Component } from 'react';

class Player extends Component {
  constructor(name, id) {
    super();
    this.name = name;
    this.points = 0;
    this.color = '';
    this.id = id;
  }
}

export default Player;
