import React, {Component} from 'react'
import {data} from '../../../galeria'
import '../../../styles/galeria/Galeria.css'

class Galeria extends Component {
  render () {
    return (
      <div className="Container">
        {
          data.map((element,key) =>{
            return(
              <div key={key} className="Cont-Imagen">
                <img src={element.image} className="Imagen" alt="Ejemplo" />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Galeria
