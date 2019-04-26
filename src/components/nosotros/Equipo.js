import React from 'react';
import TeacherCard from './TeacherCard'
//CSS
import '../../styles/nosotros/Teachers.css'
// Data
import p1 from '../../media/1-Persona.png'
import p2 from '../../media/2-Persona.png'
import p3 from '../../media/3-Persona.png'

class Equipo extends React.Component {
  render() {
    return (
      <div className="Equipo">
        <div className="Title-Container">
          <h2 className="Title">Nuestro equipo profesional</h2>
          <p>
            Contamos con un equipo de gran calidad humana, servicial y dispuestos
            a brindarte ayuda en todo lo que necesites.
          </p>
        </div>
        <div className="Teachers-Container">
          {
            data.map((teacher,index) =>{
              return (
                <TeacherCard
                  image={teacher.img}
                  key={index}
                  title={teacher.name}
                  ocupation={teacher.ocupation}
                  name={teacher.name}
                  materias={teacher.materias}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
const data = [
  {
    name: 'Lic. Diana Gomez',
    ocupation: 'Directora',
    img: p3,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Cap. Martin Borges',
    ocupation: 'Director Ejecutivo',
    img: p1,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Dra. Ana Yolanda',
    ocupation: 'Directora de SMS',
    img: p2,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Lic. Diana Gomez',
    ocupation: 'Directora',
    img: p3,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Cap. Martin Borges',
    ocupation: 'Director Ejecutivo',
    img: p1,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
  {
    name: 'Dra. Ana Yolanda',
    ocupation: 'Directora de SMS',
    img: p2,
    materias:[
      'Apariencia Personal','Servicio a Bordo','Obligaciones y Responsabilidades',
    ],
  },
]

export default Equipo
