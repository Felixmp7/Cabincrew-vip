import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/app/App.css';
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Nosotros from './nosotros/Nosotros'
import Servicios from './servicios/Servicios'
import Contacto from './contacto/Contacto'

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
  			<BrowserRouter>
          <Navbar enlaces={enlaces} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/nosotros" component={Nosotros}/>
            <Route exact path="/servicios" component={Servicios}/>
            {/* <Route exact path="/galeria" component={Galeria}/> */}
            <Route exact path="/contacto" component={Contacto}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
