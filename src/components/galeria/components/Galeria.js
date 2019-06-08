import React, {Component} from 'react'
import {data} from '../../../galeria'
import Banner from '../../banner/Banner'
import '../../../styles/galeria/Galeria.css'

class Galeria extends Component {
  render () {
    return (
      <div className="Container">
        <Banner
          title="Galeria de fotos"
          contain="Contamos con un capital humano excepcional, certificados y
          con mayor experiencia en el área de la tripulacion de cabina"
        />
        <div className="Container-Galery">
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
      </div>
    )
  }
}

export default Galeria
