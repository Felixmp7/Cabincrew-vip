// Dependencies
import React from 'react';
// Components
import Tarjeta from './Tarjeta'
// CSS
import './../../styles/nosotros/Nosotros.css'
//Media
import options from './../../media/iconos/options.png'
import list from './../../media/iconos/list.png'
import success from './../../media/iconos/success.png'
import trophy from './../../media/iconos/trophy.png'

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col m8 l3 cont">
            <Tarjeta title="Mision" media={success}/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Objetivos" media={list}/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Estrategia" media={options}/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Metas" media={trophy}/>
          </div>
        </div>
  )
}
export default GridNosotros;
