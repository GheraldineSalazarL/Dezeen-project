import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectListContainer from '../components/Projects/ProjectListContainer/ProjectListContainer'
import { MdOutlineAlternateEmail, MdCheck } from "react-icons/md";
import NewsletterContainer from '../components/Newsletters/NewsletterListContainer/NewsletterListContainer'
import CarouselListContainer from '../components/Carousel/CarouselListContainer/CarouselListContainer';

const Proyectos = () => {


  return (
    <div className='Proyectos font-roboto-cond font-w-400'>

        <CarouselListContainer/>

        <div className='ContentProyectos d-flex-row'>
            <div className='ColumnProjects'>
                <h2>Proyectos</h2>
                <hr className='hrContentProyectos'/>
                <ProjectListContainer/>
            </div>

            <NewsletterContainer/>

        </div>
    </div>
  )
}

export default Proyectos