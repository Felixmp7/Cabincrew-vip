import React, {Component} from 'react'
import ContenedorTarjetas from './ContenedorTarjetas'
import Banner from '../banner/Banner'

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
        </React.Fragment>
    )
  }
}

export default Nosotros
