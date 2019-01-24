import React, { Component } from 'react';
import '../styles/app/App.css';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
