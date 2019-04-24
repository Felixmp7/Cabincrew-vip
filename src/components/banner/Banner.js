import React from 'react'
import '../../styles/banner/Banner.css'

const Banner = props => (
  <div className="Banner">
    <div className={`container ${props.classNameDynamic}`}>
      <h2>{props.title}</h2>
      <p>{props.contain}</p>
      {
        props.titleButton ?
        <div className="cont-Button">
          <button>{props.titleButton}</button>
        </div> :
        console.log('no hay nada')
      }
    </div>
  </div>
)

export default Banner
