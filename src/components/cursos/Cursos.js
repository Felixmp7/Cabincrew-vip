import React from 'react'
import cursos from '../../media/curso.jpg'
import '../../styles/cursos/Cursos.css'

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
    </div>
  </div>
)

export default Cursos
