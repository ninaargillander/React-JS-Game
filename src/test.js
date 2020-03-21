import React, { Component } from 'react';
import './css/test.scss';

var variable = 'hej';

class Test extends Component {
  render() {
    return (
      <div>
        <p className="fluff">{this.props.text}</p>
      </div>
    );
  }
}

export default Test;
