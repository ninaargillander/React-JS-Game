import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="cardDare">
                    <span className="text">{this.props.dareText}</span>  <button onClick={() => this.props.action()} className="points">Points: {this.props.darePoints}</button>
                </div>
                <span id="or">ELLER</span>
                <div className="cardDrink" >
                    <span className="text">Drinks: {this.props.drinks}</span> <button onClick={() => this.props.action()} className="points">Points: {this.props.drinkPoints}</button>
                </div>
            </div >

        );
    }
}

export default Cards;