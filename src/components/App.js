// Dependencies
import React, { Component } from 'react'
//CSS
import '../styles/app/App.css'
//Components
import Home from './home/Home'
import Nosotros from './nosotros/Nosotros'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Nosotros />
      </div>
    );
  }
}

export default App;
