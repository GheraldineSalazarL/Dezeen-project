import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch  } from 'react-icons/fa';
import { FaRegUserCircle  } from 'react-icons/fa';
import { FaBars  } from 'react-icons/fa';

const Navbar = () => {

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("submit")
    }

  return (
    <nav className='Navbar d-flex-row font-roboto-cond black d-flex-row'>
        <div className='d-flex-row d-flex-center'>
            <NavLink to='/*' className='LogoContain'> <img className='logo' src="../../assets/dezeen-logo.png" alt="" /> </NavLink>
            <form className='search d-flex-row d-flex-center' onSubmit={handleSubmit}>
                <button type='submit'><FaSearch className='icon'/></button>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='¿Qué estás buscando hoy?'
                />
            </form>
        </div>
        <div className='d-flex-row d-flex-center'>
            <div className='itemsMenu d-flex-row d-flex-center'>
                <NavLink to='/login' className='itemM d-flex-center black font-w-400'>Ingresa</NavLink>
                <NavLink to='/proyectos' className='itemM d-flex-center black font-w-400'>Proyectos</NavLink>
                <NavLink to='/novedades' className='itemM d-flex-center black font-w-400'>Novedades</NavLink>
                <NavLink to='/comunidad' className='itemM d-flex-center black font-w-400'>Comunidad</NavLink>
                <NavLink to='/nosotros' className='itemM d-flex-center black font-w-400'>Nosotros</NavLink>
            </div>
            <FaRegUserCircle className='iconMenu'/>
            <FaBars className='iconMenu'/>
        </div>
        
    </nav>
  )
}

export default Navbar