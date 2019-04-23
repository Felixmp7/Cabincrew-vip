// Dependencies
import React from 'react';
// Components
import Tarjeta from './Tarjeta'
// CSS
import './../../styles/nosotros/Nosotros.css'
import mision from '../../media/Nosotros/iconos/mision.png'
import objetivos from '../../media/Nosotros/iconos/objetivos.png'
import estrategia from '../../media/Nosotros/iconos/estrategia.png'
import metas from '../../media/Nosotros/iconos/metas.png'

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col m8 l3 cont">
            <Tarjeta
              title="Mision"
              image={mision}
              color="#f4c138"
              border={'2px solid #f4c138'}
            />
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta
              title="Objetivos"
              image={objetivos}
              color="#a41c28"
              border={'2px solid #a41c28'}
            />
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta
              title="Estrategia"
              image={estrategia}
              color="#476dbb"
              border={'2px solid #476dbb'}
            />
          </div>

          <div className="col m8 l3 cont">
            <Tarjeta
              title="Metas"
              image={metas}
              color="#4daf6b"
              border={'2px solid #4daf6b'}
            />
          </div>
        </div>
  )
}
export default GridNosotros;
