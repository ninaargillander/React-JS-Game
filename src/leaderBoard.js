import React, { Component } from 'react';

class LeaderBoard extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="leaderBoard">
                <h1 id="lb-header">VEM VINNER?</h1>
                {[].concat(this.props.players)
                    .sort((a, b) => b.state.points - a.state.points)
                    .map((person) => (
                        <div className="player" key={person.state.id}>
                            <h5 className="playerName"> {person.state.name}:</h5> <span id="playerPoints">{person.state.points}</span>
                        </div>

                    ))
                }
            </div>
        )
    };
};

export default LeaderBoard;