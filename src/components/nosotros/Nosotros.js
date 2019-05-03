import React, {Component} from 'react'
import { animateScroll as scroll} from 'react-scroll'
import ContenedorTarjetas from './ContenedorTarjetas'
import Banner from '../banner/Banner'
import Equipo from './Equipo'


const scrollType = {
	duration: 300,
	delay: 20,
	smooth: true, // linear “easeInQuint” “easeOutCubic”
	offset: -10,
}

class Nosotros extends Component {
  constructor(props){
    super(props)
    scroll.scrollToTop(scrollType)
  }
  render () {
    return (
        <React.Fragment>
          <Banner
            title="Te brindamos lo mejor!"
            classNameDynamic="BannerNosotros"
          />
          <ContenedorTarjetas/>
          <Equipo/>
        </React.Fragment>
    )
  }
}

export default Nosotros
