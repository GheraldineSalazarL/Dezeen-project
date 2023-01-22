import React from 'react'
import { useState, useEffect } from 'react'
import NewsletterList from '../NewsletterList/NewsletterList'
import { pedirDatosNewsletter } from '../../../Helpers/PedirDatos'
import { MdOutlineAlternateEmail, MdCheck } from "react-icons/md";


const NewsletterListContainer = () => {

    const [newsletters, setNewsletters] = useState([])

    useEffect(() => {
        pedirDatosNewsletter()
            .then((res) => {
                setNewsletters(res)
                
            })
            .catch((error)=>console.log(error))
    }, [])
  return (

    <div className='ColumnNewsletter d-flex-column'>
        <h3>Suscríbete al newsletter</h3>
        <div className='InputNewsletter d-flex-row'>
            <MdOutlineAlternateEmail/>
            <input type="text" name="" id="" placeholder='Ingresa tu email'/>
            <MdCheck/>
        </div>
        <NewsletterList newsletters={newsletters}/>
        
    </div>

    
  )
}

export default NewsletterListContainer