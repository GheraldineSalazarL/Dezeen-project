import React from 'react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { pedirDatosProyectos } from '../../Helpers/PedirDatos'

const NavbarProjects = () => {
  const [proyectos, setProyectos] = useState([])
  const location = useLocation()

  pedirDatosProyectos()
    .then((res) => {
      setProyectos(res)
    })
    .catch((error)=>console.log(error))

  const Categories = []
  for (let i=0; i<proyectos.length; i++){
    if(!Categories.includes(proyectos[i].category)) Categories.push(proyectos[i].category)
  }   

  return (
    <div className={location.pathname.includes(`/proyectos`) ? "Menu-Active" : "Menu-none" }>
        <nav className='MenuProyectos d-flex-row d-flex-center font-w-400' >
          <NavLink to='/proyectos/destacados' className={`ItemMenuProyecto ${location.pathname==="/proyectos/destacados" ? "colorSelect" : ""}`}>Destacados</NavLink>
          {
            Categories.map((cat) => {
                  return <NavLink to={`/proyectos/${cat}`} className={`ItemMenuProyecto ${location.pathname.includes(`/proyectos/${cat}`) ? "colorSelect" : ""}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</NavLink>
                  
              })
          }
        </nav>
    </div>
  )
}

export default NavbarProjects