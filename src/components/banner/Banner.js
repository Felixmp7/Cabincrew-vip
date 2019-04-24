import React from 'react'
import '../../styles/banner/Banner.css'

const Banner = props => (
  <div className={`Banner ${props.classNameDynamic}`}>
    <div className="container">
      <h2>{props.title}</h2>
      <p>{props.contain}</p>
      {
        props.titleButton &&
        <div className="cont-Button">
          <button>{props.titleButton}</button>
        </div>
      }
    </div>
  </div>
)

export default Banner
