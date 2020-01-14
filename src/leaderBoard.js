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
                            <div>
                                <h5> {person.state.name}: {person.state.points}</h5>
                            </div>
                        </div>

                    ))
                }
            </div>
        )
    };
};

export default LeaderBoard;