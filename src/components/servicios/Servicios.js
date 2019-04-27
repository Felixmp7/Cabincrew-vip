import React from 'react'

const Servicios = props => {
  return (
    <div className="Servicios">
      <div className="Servicios-Header">
        <h6 className="Title">Preparación de Calidad</h6>
        <h3 className="Subtitle">
          Curso Inicial para obtener la licencia de
          Tripulante de Cabina
        </h3>
      </div>
      <div className="Servicios-Image">
        <img src={props.image} alt="bg"/>
      </div>
      <div className="Servicios-Contenido">
          <div className="Bloque Rojo">
            <h4 className="Bloque-Title">
              ¿Para quién está dirigido?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quis nesciunt eaque eligendi consectetur nulla dolorum quas,
              id consequuntur laborum, aperiam! Dolorem ea error ipsa exercitationem amet,
              id, sed suscipit officiis!
            </p>
        </div>
        <div className="Bloque Verde">
          <h4 className="Bloque-Title">
            Tiempo total de estudio
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis nesciunt eaque eligendi consectetur nulla dolorum quas,
            id consequuntur laborum, aperiam! Dolorem ea error ipsa exercitationem amet,
            id, sed suscipit officiis!
          </p>
        </div>
        <div className="Bloque Azul">
          <h4 className="Bloque-Title">
            Requisitos
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis nesciunt eaque eligendi consectetur nulla dolorum quas,
            id consequuntur laborum, aperiam! Dolorem ea error ipsa exercitationem amet,
            id, sed suscipit officiis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servicios
