import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarProjects = () => {
  return (
    <nav className='MenuProyectos d-flex-row d-flex-center font-w-400'>
            <NavLink to='/proyectos/destacados' className='ItemMenuProyecto'>Destacados</NavLink>
            <NavLink to='/proyectos/arquitectura' className='ItemMenuProyecto'>Arquitectura</NavLink>
            <NavLink to='/proyectos/interiorismo' className='ItemMenuProyecto'>Interiorismo</NavLink>
            <NavLink to='/proyectos/diseño' className='ItemMenuProyecto'>Diseño</NavLink>
            <NavLink to='/proyectos/catalogo' className='ItemMenuProyecto'>Catálogo</NavLink>
        </nav>
  )
}

export default NavbarProjects