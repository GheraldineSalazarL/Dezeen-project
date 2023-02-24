import React from 'react'
import { useState, useEffect } from 'react'
import NewsletterList from '../NewsletterList/NewsletterList'
import { MdOutlineAlternateEmail, MdCheck } from "react-icons/md";
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../../context/ApiContext'

const NewsletterListContainer = () => {

    const [newsletters, setNewsletters] = useState([])

    useEffect(() => {
        const newsletterRef = collection(db, 'newsletter')
        getDocs(newsletterRef)
            .then((resp) =>{
                const newslettersDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                setNewsletters(newslettersDB)
            })
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