import React, {Component} from 'react'
import ContenedorTarjetas from './ContenedorTarjetas'
import Banner from '../banner/Banner'
import Equipo from './Equipo'

class Nosotros extends Component {
  render () {
    return (
        <React.Fragment>
          <Banner
            title="Te brindamos lo mejor!"
            height={true}
            classNameDynamic="BannerNosotros"
          />
          <ContenedorTarjetas/>
          <Equipo/>
        </React.Fragment>
    )
  }
}

export default Nosotros
