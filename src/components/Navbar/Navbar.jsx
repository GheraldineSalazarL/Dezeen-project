import React from 'react'
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
            <div className='d-flex-center'>
                <ul className='d-flex-row d-flex-center'>
                    <li className='d-flex-center'><a className='black font-w-400' href="">Proyectos</a></li>
                    <li className='d-flex-center'><a className='black font-w-400' href="">Novedades</a></li>
                    <li className='d-flex-center'><a className='black font-w-400' href="">Comunidad</a></li>
                    <li className='d-flex-center'><a className='black font-w-400' href="">Nosotros</a></li>
                    <li className='d-flex-center'><a className='black font-w-400' href="">Ingresa</a></li>
                </ul>
            </div>
            <FaRegUserCircle className='iconMenu'/>
            <FaBars className='iconMenu'/>
        </div>
        
    </nav>
  )
}

export default Navbar