import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import Title from "./components/Title";
import images from "./images.json";
import './App.css';
import Column from "./Column.js";
import Container from "./Container.js";
import Row from "./Row.js";
// import NavBar from "./components/NavBar";


function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let k = (Math.floor(Math.random() * i) + 1);
    [array[k], array[i]] = [array[i], array[k]];
  }
  return array;
};

class App extends Component {


  state = {
    images,
    clicked: [],
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  handleClicks = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScoreIncrements();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else {
      this.handleGameReset();
    }
  };

  handleImageShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };


  handleScoreIncrements = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({ currentScore: newScore, winLose: "" });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      // this.setState({images, clickedId, score: imageClickedId.length, totalScore: this.state.topScore})
      this.setState({ message: "Winner!" });
    }
    this.handleImageShuffle();
  };

  handleGameReset = () => {
    this.setState({ clicked: [], currentScore: 0, topScore: this.state.topScore, message: "Game Over!" });
    this.handleImageShuffle();
  }


  render() {
    return (
      <Wrapper>

        <div className="App">
          <header className="App-header">
            <h1 className="App-logo">Flowers Clicky Game</h1>
            <h2 className="App-score">{this.state.winLose} Score: {this.state.currentScore} <span> | </span> Top Score: {this.state.topScore}</h2>
          </header>
        </div>



        <Title>Click an image once to earn points.
          Game resets if an image is clicked more than once.
        </Title>

        <Container>
          <Row>
            {this.state.images.map(image => (
              <Column size="md-3 sm-6">
                <ImageCard
                  key={images.id}
                  handleClicks={this.handleClicks}
                  handleScoreIncrements={this.handleScoreIncrements}
                  handleGameReset={this.handleGameReset}
                  handleImageShuffle={this.handleImageShuffle}
                  id={image.id}
                  image={image.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  };
};

export default App;
