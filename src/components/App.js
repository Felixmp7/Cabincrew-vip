import React, { Component } from 'react';
import '../styles/app/App.css';
import Home from './home/Home';
//import Nosotros from './nosotros/Nosotros'
import Cursos from './cursos/Cursos'
import Banner from './banner/Banner'
import Equipo from './equipo/Equipo'
import Footer from './footer/Footer'
//Media
import p1 from '../media/1-Persona.png'
import p2 from '../media/2-Persona.png'
import p3 from '../media/3-Persona.png'

class App extends Component {
  state = {
    teachers: [
      {
        name: 'Lic. Diana Gomez',
        ocupation: 'Directora',
        img: p3
      },
      {
        name: 'Cap. Martín Borges',
        ocupation: 'Director Ejecutivo',
        img: p1
      },
      {
        name: 'Dra. Daniela Oramas',
        ocupation: 'Jefe de SMS',
        img: p2
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Nosotros /> */}
        <Cursos/>
        <Banner/>
        <Equipo data={this.state.teachers}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
