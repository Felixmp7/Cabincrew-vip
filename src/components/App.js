import React, { Component } from 'react';
import '../styles/app/App.css';
import Home from './home/Home';
//import Nosotros from './nosotros/Nosotros'
import Cursos from './cursos/Cursos'
import Equipo from './equipo/Equipo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Nosotros /> */}
        <Cursos/>
        <Equipo/>
      </div>
    );
  }
}

export default App;
