import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
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
    handleClick(i){

        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        squares[i] = this.state;
        this.setState({
            history: history.concat({
                squares: squares
            }),
            isNext: this.state,
            stepNumber: history.length
        });
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
