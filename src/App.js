import './App.css';
import React, { Component } from 'react';
import Informations from './components/informations';
import Person from './components/person';
import CountButton from './components/CountButton';
class App extends Component {
  render(){
    return (
      <div className="App">
        <p>My first react app</p>
        <CountButton />
      </div>
    );
  }
}

export default App;
