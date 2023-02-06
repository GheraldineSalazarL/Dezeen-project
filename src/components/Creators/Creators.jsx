import React from 'react'
import { useState } from 'react'
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Creators = ({creador, props}) => {

    const [hover, setHover] = useState(false)
    const handleMouseEnter =() => {
        setHover(true)
        console.log("te veo")
    }

    const handleMouseLeave = () => {
        setHover(false)
    }



  return (
    <>
        <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={creador.foto} alt="" />
        {
            hover 
            && 
            <div className='modal'>
                <div className='modalContent'>
                    <img src={creador.foto} alt="" />
                    <h5>{creador.nombre}</h5>
                    <p>{creador.cargo}</p>
                    <div className='d-flex-row'>
                        <BsLinkedin className='iconRedesModal'/>
                        {
                            creador.id===2 ? <BsInstagram className='iconRedesModal'/> : <BsGithub className='iconRedesModal'/>
                        }
                        <SiGmail className='iconRedesModal'/>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Creators