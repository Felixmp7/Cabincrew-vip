import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import '../../styles/contacto/Contacto.css'
import Inac from '../../media/contacto/logotipo-inac.png'
import Place from '../../media/contacto/place.png'
import Call from '../../media/contacto/call.png'
import Mail from '../../media/contacto/mail.png'
import Social from '../../media/contacto/social.png'

const scrollType = {
	duration: 300,
	delay: 20,
	smooth: true, // linear “easeInQuint” “easeOutCubic”
	offset: -10,
}

class Contacto extends React.Component {
  constructor(props){
    super(props)
    scroll.scrollToTop(scrollType)
  }
	detenerPeticion = (event) =>{
		event.preventDefault(event)
	}
  render(){
    return(
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
							<div className="Button-Position">
								<button
									className="btn waves-effect amber darken-3"
									type="submit" name="action"
									onClick={this.detenerPeticion}
									>
										Enviar
	    						<i className="material-icons right">send</i>
	  						</button>
							</div>
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
            <div className="Mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.7127179795509!2d-66.88379054062618!3d10.51240970370405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a593e97a4d761%3A0x875fc90b36d3fe1f!2sFundaci%C3%B3n+La+Salle+de+Ciencias+Naturales!5e0!3m2!1ses-419!2sve!4v1556389072077!5m2!1ses-419!2sve"
                frameBorder="0"
                allowFullScreen
                title="Cabin"
              >
              </iframe>
            </div>
            <div className="Card">
              <div className="Header">
                <div className="Item">
                  <img src={Social} alt="icon4"/>
                </div>
                <div className="Item">
                  <p className="Rojo">Redes Sociales</p>
                </div>
              </div>
							<div className="Redes">
								<i className="fab fa-facebook-f"></i>
								<i className="fab fa-twitter"></i>
								<i className="fab fa-instagram"></i>
							</div>
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
  }
}

export default Contacto
