// Dependencies
import React from 'react';
// Components
import Tarjeta from './Tarjeta'
// CSS
import './../../styles/nosotros/Nosotros.css'

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col m8 l3 cont">
            <Tarjeta title="Mision"/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Objetivos"/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Estrategia"/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Metas"/>
          </div>
        </div>
  )
}
export default GridNosotros;
