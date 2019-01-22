import React, { Component } from 'react';
import '../styles/App/App.css';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
