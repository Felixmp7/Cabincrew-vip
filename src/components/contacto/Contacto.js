import React from 'react'
import '../../styles/contacto/Contacto.css'
import Inac from '../../media/contacto/logotipo-inac.png'

const Contacto = () => (
  <div className="Contacto">
    <div className="Contacto-Header">
      <div className="Title">
        <h3>¿Cómo te podemos ayudar?</h3>
      </div>
      <div className="Subtitle">
        <p>
          Rellena el siguiente formulario para brindarte
          la mejor solucion. <br/>
          Estamos aquí para ti.
        </p>
      </div>
      <div className="Form">
        <form>
          <div className="Especial">
            <input className="Medio" type="text" placeholder="Nombre"/>
            <input className="Medio" type="text" placeholder="Apellido" />
          </div>
          <input type="email" placeholder="Correo Electrónico" />
          <input type="text" placeholder="Numero de Teléfono" />
          <input type="text" placeholder="Escribe tu solicitud" />
        </form>
      </div>
    </div>
    <div className="Contacto-Info">

    </div>
    <div className="Contacto-Footer">
      <div className="Image-Position">
        <img src={Inac} alt="Logo Inac"/>
      </div>
    </div>
  </div>
)

export default Contacto
