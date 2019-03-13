import React from 'react';
import Objetivos from './grid-elements/Objetivos'
import Estrategia from './grid-elements/Estrategia'
import Metas from './grid-elements/Metas'
import Mision from './grid-elements/Mision'
import './../../styles/nosotros/Nosotros.css';

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col m8 l3 cont">
            <Mision/>
          </div>

          <div className="col m8 l3 cont">
            <Objetivos/>
          </div>

          <div className="col m8 l3 cont">
            <Estrategia/>
          </div>

          <div className="col m8 l3 cont">
            <Metas/>
          </div>
        </div>
  );
}
export default GridNosotros;
