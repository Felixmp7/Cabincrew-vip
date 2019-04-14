// Dependencies
import React from 'react';
// Components
import Tarjeta from './Tarjeta'
// CSS
import './../../styles/nosotros/Nosotros.css'
import mision from '../../media/iconos/mision.png'
import objetivos from '../../media/iconos/objetivos.png'
import estrategia from '../../media/iconos/estrategia.png'
import metas from '../../media/iconos/metas.png'

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col m8 l3 cont">
            <Tarjeta title="Mision" image={mision}/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Objetivos" image={objetivos}/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Estrategia" image={estrategia}/>
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta title="Metas" image={metas}/>
          </div>
        </div>
  )
}
export default GridNosotros;
