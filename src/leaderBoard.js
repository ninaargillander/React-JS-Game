import React, { Component } from 'react';

class LeaderBoard extends Component {
    constructor() {
        super();

    }




    render() {
        return (
            <div className="leaderBoard">
                <div className="player">
                    <h5>{this.props.players[0].state.name}: {this.props.players[0].state.points}</h5>

                </div>
            </div>
        )
    };
};

export default LeaderBoard;