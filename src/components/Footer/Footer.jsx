import React from 'react'
import { BsYoutube, BsPinterest, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='Footer font-roboto-cond black'>
        <hr className='Separator'/>
        <div className='MenuFooter'>
            <ul className='d-flex-row black'>
                <li><a href="">Trabaja en Dezeen</a></li>
                <li><a href="">Guía de eventos</a></li>
                <li><a href="">Aviso de privacidad</a></li>
                <li><a href="">Contáctanos</a></li>
                <li className=''>
                    <BsYoutube className='IconFooter'/>
                    <BsPinterest className='IconFooter'/>
                    <BsTwitter className='IconFooter'/>
                    <BsInstagram className='IconFooter'/>
                    <BsFacebook className='IconFooter'/>
                </li>
            </ul>
        </div>
        <div className='InfoFooter d-flex-row font-w-400'>
            <img src="https://via.placeholder.com/250" alt="" />
            <p>Todos los derechos reservados. Dezeen UK  2006 - 2022. <br />
                ISNN 0823-4365 <br />
                Todas las imágenes son propiedad de cada fotógrafo/oficina mencionada.
            </p>
        </div>
    </div>
  )
}

export default Footer
