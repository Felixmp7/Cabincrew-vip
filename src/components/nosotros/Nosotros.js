import React, {Component} from 'react'
import Tarjetas from './Tarjetas'
import Banner from '../banner/Banner'

class Nosotros extends Component {
  render () {
    return (
        <React.Fragment>
          <Banner
            title="Te brindamos lo mejor"
          />
          <Tarjetas/>
        </React.Fragment>
    )
  }
}

export default Nosotros
