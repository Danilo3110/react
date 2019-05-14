import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import Clock from './User/Clock';

class App extends Component {
  state = {
    username: ["Danilo90", "Mina1995"],
    email: ["lukic3@sbb.rs", "teodora@gmail.com"]
  }

  eventHandler = ( event ) => {
    this.setState({
      username: [event.target.value, "Mina1995"]
    })
  }

  clock = () => {
    setInterval(() => {
      const date = (new Date()).toLocaleTimeString('sr-RS');
      document.querySelector('#clock').innerHTML = date;
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Clock click={this.clock}/>
        <UserInput 
          change={this.eventHandler}
          userName={this.state.username[0]}/>
        <UserOutput 
          userName={this.state.username[0]} 
          userStateEmail={this.state.email[0]}
          >Your username:</UserOutput>
        <UserOutput 
          userName="Mina1995"
          userStateEmail={this.state.email[1]} 
          >Second username:</UserOutput>
      </div>
    );
  }
}

export default App;
