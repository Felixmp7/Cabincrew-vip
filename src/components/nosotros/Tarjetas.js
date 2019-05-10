// Dependencies
import React from 'react';
// Components
import Tarjeta from './Plantilla-Tarjeta'
// CSS
import './../../styles/nosotros/Nosotros.css'
import mision from '../../media/Nosotros/iconos/mision.png'
import objetivos from '../../media/Nosotros/iconos/objetivos.png'
import estrategia from '../../media/Nosotros/iconos/estrategia.png'
import metas from '../../media/Nosotros/iconos/metas.png'

const Tarjetas = () => {
  return (
    <div className="cont">
      <div className="cont-tarjeta left">
        <Tarjeta
          title="Misión"
          image={mision}
          color="#f4c138"
          border={'2px solid'}
        />
      </div>

      <div className="cont-tarjeta right">
        <Tarjeta
          title="Objetivos"
          image={objetivos}
          color="#a41c28"
          border={'2px solid'}
        />
      </div>

      <div className="cont-tarjeta left">
        <Tarjeta
          title="Estrategia"
          image={estrategia}
          color="#476dbb"
          border={'2px solid'}
        />
      </div>

      <div className="cont-tarjeta right">
        <Tarjeta
          title="Metas"
          image={metas}
          color="#4daf6b"
          border={'2px solid'}
        />
      </div>

    </div>
  )
}
export default Tarjetas;
