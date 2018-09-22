import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Image from "./components/Image";
import Title from "./components/Title";
import images from "./images.json";
import './App.css';

class App extends Component {


  state = {
    images,
    clickedId: [],
    currentScore: 0,
    totalScore: 0,
    topScore: 0,
    winLose: ""
  };

  imageClicks = id => {
    let clickedId = this.state.clickedId;

    if (!clickedId.includes(id)) {
      clickedId.push(id)
      this.incrementScore();
      if (clickedId.length === 12) {
        // this.setState({ clickedId: []});
        this.resetGame();
      }
    }
  }

  // imageShuffle = array => {
  //   for( let i = array.length - 1; i>0; i--) {
  //     let k = Math.floor((Math.random() * i) + 1);
  //     [array[i], array[k]] = [array[k], array[i]];
  //   }
  //   return array;
  // }

  imageShuffle = img => {
    for (let i = images.length - 1; i > 0; i--) {
      let k = (Math.floor(Math.random() * i) + 1);
      [images[k], images[i]] = [images[i], images[k]];
    }
    return img;
  }


  incrementScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({ topScore: newScore });

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      // this.setState({images, clickedId, score: imageClickedId.length, totalScore: this.state.topScore})
      this.setState({ winLose: "Winner!"});
    }
    this.imageShuffle();
  };

  resetGame = () => {
    this.setState({ clickedId: [], score: 0, totalScore: this.state.topScore, winLose: "Oops!" });
    this.imageShuffle();
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-logo">Clicky Game</h1>
          <p className="App-title">Click an image to start!</p>
          <h1>Score: {this.state.score} <span> | </span> Top Score: {this.state.totalScore}</h1>
        </header>

        <Wrapper>
          {this.state.images.map(img => (
            <Image
              handleImageChange={this.handleImageChange}
              id={img.id}
              url={img.url}
            />
          ))}

          <Title>Click an image once to earn points. Game resets if an image is clicked more than once.</Title>

        </Wrapper>


      </div>
    );
  }
}

export default App;
