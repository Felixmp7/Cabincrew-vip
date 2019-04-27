import React from 'react'
// import '../../styles/contacto/Contacto.css'

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
          <input type="text" placeholder="Nombre"/>
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="text" placeholder="Numero de Teléfono" />
          <input type="text" placeholder="Escribe tu solicitud" />
        </form>
      </div>
    </div>
    <div className="Contacto-Info"></div>
    <div className="Contacto-Footer"></div>
  </div>
)

export default Contacto
