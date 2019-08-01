import React, { Component } from 'react';
import Image from './Image';
import data from '../data.json';
import Nav from './Nav';
import Footer from './Footer';

class Board extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    }
    componentDidMount(){
        this.setState({data: this.shuffleData(this.state.data)});
    }
    shuffleData = data => {
        let i = data.length - 1;
        while(i>0){
            const randomVal = Math.floor(Math.random()*(i+1));
            const temp = data[randomVal];
            data[i] = data[randomVal];
            data[randomVal]= temp;
            i--;
        }
        return data;
    }
    
        handleImageClick = id => {
            let guessedCorrect = false;
            const newData = this.state.data.map(item => {
                const newItem = {...item};
                if(newItem.id === id){
                    if(!newItem.clicked){
                        newItem.clicked = true;
                        guessedCorrect =true;
                    }
                }
                return newItem;
            });
            guessedCorrect ? this.handleCorrectFunction(newData) : this.handleInCorrectFunction(newData)
        }
        handleCorrectFunction = newData => {
            const {topScore, score} = this.state;
            const newScore = score+1;
            const newTopScore = newScore > topScore ? newScore : topScore;
            this.setState({
                data: this.shuffleData(newData),
                score: newScore,
                topScore: newTopScore
            })
        }
        handleIncorrectFunction = newData => {
            this.setState({
                data: this.reStart(data),
                score:0
            })
        }
        reStart = data => {
            const resetData = data.map(item => ({ ...item, clicked:false}));
            return this.shuffleData(resetData);
        }
    render() {
        return (
        <div>
            <Nav score ={this.state.score}
            topScore={this.state.topScore}/> 
        
            <Board {this.state.data.map(item => (
                <Image key ={item.id}
                id={item.id}
                handleClick = {this.handleImageClick}
                image = {item.image}
                />
                )
                
            )}
            />
        
            <Footer /> 
        </div>
        
        )
            }
}

export default Board;