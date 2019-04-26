import React from 'react'

const TeacherCard = props => (
  <div key={props.key} className="TeacherCard">
    <div className="TeacherImage">
      <img src={props.image} alt={props.ocupation}/>
    </div>
    <div className="TeacherInfo">
      <h5>{props.name}</h5>
      <h6>{props.ocupation}</h6>
    </div>
    <div className="Materias">
      {
        props.materias.map( materia =>{
          return (
            <p>{materia}</p>
          )
        })
      }
    </div>
  </div>
)

export default TeacherCard
