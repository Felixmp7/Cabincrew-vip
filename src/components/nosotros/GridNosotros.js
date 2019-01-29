import React from 'react';
import Objetivos from './grid-elements/Objetivos'
import Estrategia from './grid-elements/Estrategia'
import Metas from './grid-elements/Metas'
import Mision from './grid-elements/Mision'
import './../../styles/nosotros/Nosotros.css';

const GridNosotros = () => {
  return (
        <div className="row">
          <div className="col m10 l3">
            <Mision/>
          </div>

          <div className="col m10 l3">
            <Objetivos/>
          </div>

          <div className="col m10 l3">
            <Estrategia/>
          </div>

          <div className="col m10 l3">
            <Metas/>
          </div>
        </div>
  );
}
export default GridNosotros;