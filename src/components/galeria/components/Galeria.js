import React, {Component} from 'react'
import {data} from '../../../galeria'

console.log(data);
class Galeria extends Component {
  render () {
    return (
      <div>
        {
          data.map((element,key) =>{
            console.log(element);
            return(
              <div key={key}>
                <img src={element.image} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Galeria
