import React, { Component } from "react";
import Image from "./Image";
import data from "../data.json";
import Nav from "./Nav";
//import Footer from "./Footer";
// import { isTSExpressionWithTypeArguments } from "@babel/types";

class Board extends Component {
  state = {
    data: [],
    score: 0,
    topScore: 0,
    beenClicked: []
  };
  componentDidMount() {
    // this.setState({data: this.shuffleData(data)});
    this.setState({ data: data });
  }
  shuffleData = data => {

    var currentIndex = data.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = data[currentIndex];
      data[currentIndex] = data[randomIndex];
      data[randomIndex] = temporaryValue;
    }

    this.setState({
      data: data
    });
  };

  newGame() {
    this.setState({
        score: 0,
        beenClicked: []
      });

  }

  handleImageClick = id => {
    if (this.state.beenClicked.includes(id)) {
      alert("You lost!")
      this.newGame()
      
    } else {
      //correct guess
      let temp = this.state.beenClicked;
      temp.push(id);
      this.setState({
        beenClicked: temp
      });
    }
    
  };
  handleCorrectFunction = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };
  handleIncorrectFunction = newData => {
    this.setState({
      data: this.reStart(data),
      score: 0
    });
  };
  reStart = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Nav />
        {/* {score ={this.state.score}} */}
        {/* {topScore={this.state.topScore}} */}
        {/* {<Board />} */}

        {/* {state = this.state.data.map(item) => { */}
        {this.state.data ? (
          this.state.data.map(oneImage => (
            <Image
              id={oneImage.id}
              key={oneImage.id}
              handleClick={this.handleImageClick}
              image={oneImage.image}
            />
          ))
        ) : (
          <h1>No data to display</h1>
        )}
            </div>  
    );
  }
}

export default Board;
