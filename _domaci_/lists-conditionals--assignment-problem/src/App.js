import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    text: "",
    array: [],
    length: 0
  }

  lengthOfText = (event) => {
    const text = event.target.value;
    const length = text.length;
    const makeArray = text.split("");
    this.setState({
        text: text,
        array: makeArray,
        length: length
    });
  }

  showText = () => {
    const length = this.state.length;
    return length < 5 ? "Text too short" : "Text long enough";
  }

  deleteLetterHandler = (letterIndex) => {
    const array = [...this.state.array];
    array.splice(letterIndex, 1);
    const makeString = array.join("");
    const length = makeString.length;
    this.setState({
                  text: makeString,
                  array: array,
                  length: length});
  }

  render() {
    let letters = (
      <div>
        {this.state.array.map((letter, index) => {
          return (<CharComponent
                    click={() => this.deleteLetterHandler(index)} 
                    text={letter} 
                    key={index} />);
        })}
      </div>);

    return (
      <div className="App">
        <p>Enter some text:</p>
        <input type="text" onChange={(event) => this.lengthOfText(event)} value={this.state.text} placeholder="enter text"/>
        <p>Length of entered word is: {this.state.length}</p>
        <ValidationComponent length={this.state.length} text={this.showText()} />
        {letters}
      </div>
    );
  }
}

export default App;
