import React, {Component} from 'react'
import plain from '../../media/2-Avion.jpg'

class Equipo extends Component{
  render(){
    return(
      <div className="Equipo">
        {
          this.props.data.map( (teacher, key) => {
            return(
              <div key={teacher.key} className="Teacher-card">
                <div className="Image-container">
                  <img src={teacher.img} alt={teacher.ocupation}/>
                </div>
                <div className="Info-team">
                  <h3>{teacher.name}</h3>
                  <h5>{teacher.ocupation}</h5>
                </div>
              </div>
            )
          })
        }
        <div className="Info">
          <p>
            Te brindaremos una guía direccional, adaptable a las circunstancias
            del momento, para alcanzar los fines y objetivos de la Empresa. Te
            brindaremos una guía direccional, adaptable a las circunstancias del
            momento, para alcanzar los fines y objetivos de la Empresa.
          </p>
        </div>
        <div className="imageBG">
          <img src={plain} alt="plain"/>
        </div>
      </div>
    )
  }
}
export default Equipo
