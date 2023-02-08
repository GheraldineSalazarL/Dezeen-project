import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaSearch  } from 'react-icons/fa';
import { FaRegUserCircle  } from 'react-icons/fa';
import { FaBars  } from 'react-icons/fa';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import logo from '../../assets/dezeen-logo.png'

const Navbar = () => {

    const {user, logout} = useContext(LoginContext)
    console.log(user)

    const location = useLocation()

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("submit")
    }

    const navActive = () => {
        if(location.pathname!=="/login" && location.pathname!=="/sigin"){
            return "Navbar d-flex-row font-roboto-cond black"
        } else {
            return "Navbar-none"
        }
    }
    
  return (
    <nav className={navActive()}>
        <div className='d-flex-row d-flex-center'>
            <NavLink to='/*' className='LogoContain'> <img className='logo' src={logo} alt="" /> </NavLink>
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
                {
                    user.logged
                    ?
                        <NavLink onClick={logout} className={`itemM d-flex-center black font-w-400`}>Cerrar</NavLink>
                    :
                        <NavLink to='/login' className={`itemM d-flex-center black font-w-400 `}>Ingresa</NavLink>
                }
                <NavLink to='/proyectos' className={`itemM d-flex-center black font-w-400 ${location.pathname.includes(`/proyectos`) ? "colorSelect" : ""}`}>Proyectos</NavLink>
                <NavLink to='/novedades' className={`itemM d-flex-center black font-w-400 ${location.pathname==="/novedades" ? "colorSelect" : ""}`}>Novedades</NavLink>
                <NavLink to='/comunidad' className={`itemM d-flex-center black font-w-400 ${location.pathname==="/comunidad" ? "colorSelect" : ""}`}>Comunidad</NavLink>
                <NavLink to='/nosotros' className={`itemM d-flex-center black font-w-400 ${location.pathname==="/nosotros" ? "colorSelect" : ""}`}>Nosotros</NavLink>
            </div>
            <Link><FaRegUserCircle className='iconMenu'/></Link>
            <Link><FaBars className='iconMenu'/></Link>
        </div>
        
    </nav>
  )
}

export default Navbar