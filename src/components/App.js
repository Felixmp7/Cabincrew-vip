import React, { Component } from 'react';
import '../styles/app/App.css';
import Navbar from './navbar/Navbar'
//import Home from './home/Home'

class App extends Component {
  state = [
  	'Home',
  	'Nosotros',
  	'Servicios',
  	'Galeria',
  	'Contacto',
  ]
  render() {
    return (
      <div className="App">
  			<Navbar enlaces={this.state} />
        {/* <Home/> */}
      </div>
    );
  }
}

export default App;
