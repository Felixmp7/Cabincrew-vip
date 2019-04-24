import React, { Component } from 'react';
import '../styles/app/App.css';
import Navbar from './navbar/Navbar'
//import Home from './home/Home'
import Nosotros from './nosotros/Nosotros'

const enlaces = [
  'Home',
  'Nosotros',
  'Servicios',
  'Galeria',
  'Contacto',
]

class App extends Component {
  render() {
    return (
      <div className="App">
  			<Navbar enlaces={enlaces} />
        {/* <Home/> */}
        <Nosotros/>
      </div>
    );
  }
}

export default App;
