import React from 'react';
import Teacher from './Plantilla-Equipo'
// Data
import p1 from '../../media/1-Persona.png'
import p2 from '../../media/2-Persona.png'
import p3 from '../../media/3-Persona.png'

const data = [
  {
    name: 'Lic. Diana Gomez',
    ocupation: 'Directora',
    img: p1,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Cap. Martin Borges',
    ocupation: 'Director Ejecutivo',
    img: p2,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Dra. Ana Yolanda',
    ocupation: 'Directora de SMS',
    img: p3,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Lic. Diana Gomez',
    ocupation: 'Directora',
    img: p1,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Cap. Martin Borges',
    ocupation: 'Director Ejecutivo',
    img: p2,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Dra. Ana Yolanda',
    ocupation: 'Directora de SMS',
    img: p3,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
]

class Equipo extends React.Component {
  render() {
    return (
      <div className="Equipo">
        <div className="Teachers-Container">
          {
            data.map((teacher,index) =>{
              return (
                <Teacher
                  image={teacher.img}
                  key={index}
                  title={teacher.name}
                  ocupation={teacher.ocupation}
                  name={teacher.name}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Equipo
