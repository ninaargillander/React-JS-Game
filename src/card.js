import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <h3>{'Namn:' + this.props.player.name}</h3>
                <div className="cardDare cardText" onClick={() => this.props.action(0)} type="button">
                    <span className="text">{this.props.dareText}</span>
                </div>
                {/* <button onClick={() => this.props.action(0)} className="points">Points: {this.props.darePoints}</button> */}

                <span id="or">ELLER</span>
                <div className="cardDrink cardText" onClick={() => this.props.action(1)} type="button">
                    <span className="text">Drick: {this.props.drinks}</span>
                    {/* <button onClick={() => this.props.action(1)} className="points">Points: {this.props.drinkPoints}</button> */}
                </div>
            </div >

        );
    }
}

export default Cards;