import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      points: 0,
      color: "",
    }
  }
}

export default Player;
