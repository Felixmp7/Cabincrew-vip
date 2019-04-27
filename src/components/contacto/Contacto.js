import React from 'react'
import '../../styles/contacto/Contacto.css'
import Inac from '../../media/contacto/logotipo-inac.png'
import Place from '../../media/contacto/place.png'
import Call from '../../media/contacto/call.png'
import Mail from '../../media/contacto/mail.png'
import Social from '../../media/contacto/social.png'


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
      <div className="Izquierda">
        <div className="Card">
          <div className="Header">
            <div className="Item">
              <img src={Place} alt="icon1"/>
            </div>
            <div className="Item">
              <p className="Azul">Oficina Principal</p>
            </div>
          </div>
          <p>
            Urb. Colinas de los Caobos con Av. Boyacá,
            Edif. Fundación La Salle, Oficina PB Oeste. Parroquia El Recreo,
            Municipio Libertador, Distrito Capital 1050 Caracas - Venezuela
          </p>
        </div>

        <div className="Card">
          <div className="Header">
            <div className="Item">
              <img src={Call} alt="icon2"/>
            </div>
            <div className="Item">
              <p className="Verde">Llámanos</p>
            </div>
          </div>
          <p>
            +58(0212)625.9220 <br/>
            +58(0212)418.2328
          </p>
        </div>

        <div className="Card">
          <div className="Header">
            <div className="Item">
              <img src={Mail} alt="icon3"/>
            </div>
            <div className="Item">
              <p className="Amarillo">Escribenos</p>
            </div>
          </div>
          <p>info@cabincrewvip.com</p>
        </div>

      </div>
      <div className="Derecha">

        <div className="Card">
          <div className="Header">
            <div className="Item">
              <img src={Social} alt="icon4"/>
            </div>
            <div className="Item">
              <p className="Rojo">Redes Sociales</p>
            </div>
          </div>
          <p>Icons</p>
        </div>
      </div>
    </div>
    <div className="Contacto-Footer">
      <div className="Image-Position">
        <img src={Inac} alt="Logo Inac"/>
      </div>
    </div>
  </div>
)

export default Contacto
