import React from 'react'
import '../../styles/servicios/Servicios.css'
import background from '../../media/servicio/estudiantes.jpg'
import libros from '../../media/servicio/curso-libros.jpg'

const Servicios = () => {
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
        <img src={background} alt="bg"/>
      </div>
      <div className="Servicios-Contenido">
          <div className="Bloque">
            <h4 className="Bloque-Title Rojo">
              ¿Para quién está dirigido?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quis nesciunt eaque eligendi consectetur nulla dolorum quas,
              id consequuntur laborum, aperiam! Dolorem ea error ipsa exercitationem amet,
              id, sed suscipit officiis!
            </p>
        </div>
        <div className="Bloque">
          <h4 className="Bloque-Title Verde">
            Tiempo total de estudio
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis nesciunt eaque eligendi consectetur nulla dolorum quas,
            id consequuntur laborum, aperiam! Dolorem ea error ipsa exercitationem amet,
            id, sed suscipit officiis!
          </p>
        </div>
        <div className="Bloque">
          <h4 className="Bloque-Title Azul">
            Requisitos
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis nesciunt eaque eligendi consectetur nulla dolorum quas,
            id consequuntur laborum, aperiam! Dolorem ea error ipsa exercitationem amet,
            id, sed suscipit officiis!
          </p>
        </div>
        <div className="Bloque-Imagen">
          <img src={libros} alt="curso-libros"/>
        </div>
      </div>
    </div>
  )
}

export default Servicios
