import React from 'react'
import { MdOutlineAlternateEmail, MdCheck } from "react-icons/md";


const Newsletter = ({Newsletter}) => {
  return (
    // <div className='ColumnNewsletter d-flex-column'>
    //     <h3>Suscríbete al newsletter</h3>
    //     <div className='InputNewsletter d-flex-row'>
    //         <MdOutlineAlternateEmail/>
    //         <input type="text" name="" id="" placeholder='Ingresa tu email'/>
    //         <MdCheck/>
    //     </div>
        <div className=''>
            <img className='ImagePrincipal' src={Newsletter.img} alt="" />
            <h3>{Newsletter.nombre}</h3>
            <p>{Newsletter.detail}</p>
        </div>
        
    // </div>
)
}

export default Newsletter