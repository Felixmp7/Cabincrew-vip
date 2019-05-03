import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/banner/Banner.css'

const Banner = props => (
  <div className={`Banner ${props.classNameDynamic}`}>
    <div className="container">
      <h2>{props.title}</h2>
      {
        props.contain && <p>{props.contain}</p>
      }
      {
        props.titleButton &&
        <div className="cont-Button">
          <button><Link to="/nosotros">{props.titleButton}</Link></button>
        </div>
      }
    </div>
  </div>
)

export default Banner
