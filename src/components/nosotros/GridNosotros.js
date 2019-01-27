import React from 'react';
import Objetivos from './grid-elements/Objetivos'
import Estrategia from './grid-elements/Estrategia'
import Metas from './grid-elements/Metas'
import Mision from './grid-elements/Mision'
import './../../styles/nosotros/Nosotros.css';

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col s8 m3 tarjeta">
            <Mision/>
          </div>

          <div className="col s8 m3 tarjeta">
            <Objetivos/>
          </div>

          <div className="col s8 m3 tarjeta">
            <Estrategia/>
          </div>

          <div className="col s8 m3 tarjeta">
            <Metas/>
          </div>
        </div>
  );
}
export default GridNosotros;