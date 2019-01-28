import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import characters from "./characters.json";
import Navbar from "./components/Navbar";



class App extends Component {
  //Setting the state 
  state = {
    characters,
    clicked: [],
    currentScore: 0,
    topScore: 0,
    message: "",
    headTitle: "Click an Image to Start!"
  
  };
// Set the cards to shuffle
  shuffleCards = id => {
    const charactersRandom = arr => arr.sort(() => Math.random() - 0.5)

    const characters = charactersRandom(this.state.characters);

    const newScore = this.state.clicked.includes(id) ? 0 : this.state.currentScore + 1

    const clickedReset = newScore === 0 ? [] : [...this.state.clicked, id]

    const newTopScore = this.state.topScore < newScore ? newScore : this.state.topScore

    this.setState({
      characters,
      clicked: clickedReset,
      currentScore: newScore,
      topScore: newTopScore
    });

    if (newScore  === 0) {
      this.setState({
        headTitle: "Guessed Incorrectly! Play Again!",
      })

    } else {
      this.setState({
        headTitle: "You guessed Correctly! Keep Clicking! "
      })
    }

  }
//   componentDidMount() {
//     this.setState({characters: this.shuffle(this.state.characters)})
//   };
// // Set the cards to shuffle
//   shuffle = data => {
//     for (let i = data.length - 1; i > 0; i --) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [data[i], data[j]] = [data[j], data[i]];
//     }
//     return data;
  };

  render() 
  {
    return (
      <Wrapper>
        <Title
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        headTitle={this.state.headTitle}
        ></Title>
        <Header></Header>
        <Wrapper className = "container">
        {this.state.characters.map(character => (
          <CharacterCard
          shuffleCards={this.shuffleCards}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          currentScore={this.state.currentScore}
          />
        ))}

          </Wrapper>
      </Wrapper>
    )
  }


export default App;
