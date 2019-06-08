import React, {Component} from 'react'
import {data} from '../../../galeria'
import '../../../styles/galeria/Galeria.css'
console.log(data);
class Galeria extends Component {
  render () {
    return (
      <div className="Container">
        {
          data.map((element,key) =>{
            console.log(element);
            return(
              <div key={key} className="Cont-Imagen">
                <img src={element.image} className="Imagen" />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Galeria
