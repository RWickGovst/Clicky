import React, { Component } from 'react';
import Board from './Board';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNext: true,
            stepNumber: 0,
            history: [
                {squares: Array(12).fill(null)}
            ]
        }  
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i)=>this.onClick[i]}
                    squares={current.squares} />
                </div>
            </div>
        );
    }
}
export default Game;