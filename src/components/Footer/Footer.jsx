import React from 'react'
import { BsYoutube, BsPinterest, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/dezeen-logo2.png'
const Footer = () => {

    const location = useLocation()

    const footerActive = () => {
        if(location.pathname!=="/login" && location.pathname!=="/sigin"){
            return "Footer d-flex-column font-roboto-cond black"
        } else {
            return "Footer-none"
        }
    }

  return (
    <div className={footerActive()}>
        <hr className='Separator'/>
        <div className='MenuFooter'>
            <ul className='d-flex-row black'>
                <li><a href="">Trabaja en Dezeen</a></li>
                <li><a href="">Guía de eventos</a></li>
                <li><a href="">Aviso de privacidad</a></li>
                <li><a href="">Contáctanos</a></li>
                <li className=''>
                    <Link><BsYoutube className='IconFooter'/></Link>
                    <Link><BsPinterest className='IconFooter'/></Link>
                    <Link><BsTwitter className='IconFooter'/></Link>
                    <Link><BsInstagram className='IconFooter'/></Link>
                    <Link><BsFacebook className='IconFooter'/></Link>
                </li>
            </ul>
        </div>
        <div className='InfoFooter d-flex-row font-w-400'>
            <img src={logo} alt="" />
            <p>Todos los derechos reservados. Dezeen UK  2006 - 2022. <br />
                ISNN 0823-4365 <br />
                Todas las imágenes son propiedad de cada fotógrafo/oficina mencionada.
            </p>
        </div>
    </div>
  )
}

export default Footer
