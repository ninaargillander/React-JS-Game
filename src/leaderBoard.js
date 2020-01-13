import React, { Component } from 'react';

class LeaderBoard extends Component {
    constructor() {
        super();

    }




    render() {
        return (
            <div className="leaderBoard">
                <h1 id="lb-header">VEM VINNER?</h1>
                {this.props.players.map((person) => (
                    <div className="player">
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