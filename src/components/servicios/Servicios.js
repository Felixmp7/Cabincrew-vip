import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import '../../styles/servicios/Servicios.css'
import background from '../../media/servicio/estudiantes.jpg'
import libros from '../../media/servicio/curso-libros.jpg'

const scrollType = {
	duration: 300,
	delay: 20,
	smooth: true, // linear “easeInQuint” “easeOutCubic”
	offset: -10,
}

class Servicios extends React.Component{
  constructor(props){
    super(props)
    scroll.scrollToTop(scrollType)
  }
  render(){
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
                Dirigido a personas que hayan completado el ciclo de Educación
								Secundaria con vocación por la Aviación y deseen Integrarse a
								las Operaciones de una empresa de Aviación Ejecutiva o Línea
								Aérea como parte de la Tripulación de Vuelo en calidad de
								Tripulante de Cabina.
              </p>
          </div>
          <div className="Bloque">
            <h4 className="Bloque-Title Verde">
              Horarios
            </h4>
						<p className="Horarios">CURSO MATUTINO
						09:00 AM A 01:00 PM</p>
						<p className="Horarios">CURSO INTENSIVO
						09:00 AM A 05:00 PM</p>
						<p className="Horarios">VESPERTINO
						02:00 PM A 06:00 PM</p>
						<p className="Horarios">NOCTURNO
						06:00 PM A 08:00 PM</p>
						<p className="Horarios">SABATINO
						09:00 AM A 05:00 PM</p>
          </div>
          <div className="Bloque">
            <h4 className="Bloque-Title Azul">
              Requisitos
            </h4>
						<ul className="Requisitos">
							<li>Edad mínima: 18 años. Menores de 18 años solo con autorización
								de sus padres o representantes legales.</li>
								<li>Copia título de Bachiller. (Haber completado la educación secundaria).</li>
								<li>3 Fotos tipo Carnet (Actualizada).</li>
								<li>Copia de la C.I (Ampliada).</li>
								<li>Síntesis Curricular y Certificado de Salud.</li>
						</ul>
          </div>
          <div className="Bloque-Imagen">
            <img src={libros} alt="curso-libros"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Servicios
