import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch  } from 'react-icons/fa';
import { FaRegUserCircle  } from 'react-icons/fa';
import { FaBars  } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='Navbar d-flex-row font-roboto-cond black d-flex-row'>
        <div className='d-flex-row d-flex-center'>
            <img className='logo' src="../../assets/dezeen-logo.png" width="148px" height="100%" alt="" />
            <div className='search d-flex-row d-flex-center'>
                <FaSearch className='icon'/>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='¿Qué estás buscando hoy?'
                />
            </div>
        </div>
        <div className='d-flex-row d-flex-center'>
            <div className='itemsMenu d-flex-row d-flex-center'>
                <NavLink to='' className='itemM d-flex-center black font-w-400'>Ingresa</NavLink>
                <NavLink to='' className='itemM d-flex-center black font-w-400'>Proyectos</NavLink>
                <NavLink to='' className='itemM d-flex-center black font-w-400'>Novedades</NavLink>
                <NavLink to='' className='itemM d-flex-center black font-w-400'>Comunidad</NavLink>
                <NavLink to='' className='itemM d-flex-center black font-w-400'>Nosotros</NavLink>
            </div>
            <FaRegUserCircle className='iconMenu'/>
            <FaBars className='iconMenu'/>
        </div>
        
    </nav>
  )
}

export default Navbar