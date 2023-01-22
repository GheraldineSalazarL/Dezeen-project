import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { pedirDatosProyectos } from '../../Helpers/PedirDatos'

const NavbarProjects = () => {
  const [proyectos, setProyectos] = useState([])

  pedirDatosProyectos()
    .then((res) => {
      setProyectos(res)
    })
    .catch((error)=>console.log(error))

  // const proceso = {...{...proyectos}}
  const Categories = []
  for (let i=0; i<proyectos.length; i++){
    if(!Categories.includes(proyectos[i].category)) Categories.push(proyectos[i].category)
  }
  console.log(Categories)
    

  return (
    <div>
        <nav className='MenuProyectos d-flex-row d-flex-center font-w-400'>
          <NavLink to='/proyectos/destacados' className='ItemMenuProyecto'>Destacados</NavLink>
          {
            Categories.map((cat) => {
                  return <NavLink to={`/proyectos/${cat}`} className='ItemMenuProyecto'>{cat.charAt(0).toUpperCase() + cat.slice(1)}</NavLink>
                  
              })
          }
        </nav>
    </div>
  )
  // return (
  //   <nav className='MenuProyectos d-flex-row d-flex-center font-w-400'>
  //           <NavLink to='/proyectos/destacados' className='ItemMenuProyecto'>Destacados</NavLink>
  //           <NavLink to='/proyectos/arquitectura' className='ItemMenuProyecto'>Arquitectura</NavLink>
  //           <NavLink to='/proyectos/interiorismo' className='ItemMenuProyecto'>Interiorismo</NavLink>
  //           <NavLink to='/proyectos/diseño' className='ItemMenuProyecto'>Diseño</NavLink>
  //           <NavLink to='/proyectos/catalogo' className='ItemMenuProyecto'>Catálogo</NavLink>
  //       </nav>
  // )
}

export default NavbarProjects