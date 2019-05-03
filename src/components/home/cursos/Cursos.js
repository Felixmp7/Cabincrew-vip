import React from 'react'
import {Link} from 'react-router-dom'
import cursos from '../../../media/Inicio/curso.jpg'
import '../../../styles/home/cursos/Cursos.css'

const Cursos = () => (
  <div className="Curso">
    <div className="image">
      <img src={cursos} alt="cursos"/>
    </div>
    <div className="info">
      <h2>Te ofrecemos cursos</h2>
      <h4>Para la formación de profesionales y técnicos del medio Aeronáutico.</h4>
      <p>
        Te brindaremos una guía direccional, adaptable a las circunstancias del momento,
        para alcanzar los fines y objetivos de le Empresa.
      </p>
      <div className="cont-Button">
        <button><Link to="/servicios">Mas info</Link></button>
      </div>
    </div>
  </div>
)

export default Cursos
