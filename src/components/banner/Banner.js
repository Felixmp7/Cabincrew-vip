import React from 'react'
import '../../styles/home/banner/Banner.css'

const Banner = props => (
  <div className="Banner">
    <div className="container">
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
