import React from 'react'
// import { useState } from 'react';
import { FaArrowRight,  FaArrowLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { handleAfter, handleNext } from '../CarouselList/CarouselList'


const Carousel = ({proyecto, proyectosLength, imagenActual, setImagenActual}) => {

  const handleNext = () => {
    setImagenActual (imagenActual === proyectosLength-1 ? 0 : imagenActual+1)
  }
  const handleAfter = () => {
    setImagenActual (imagenActual === 0 ? proyectosLength-1 : imagenActual-1)
  }

  const handleSelect = (index) => {
    setImagenActual(index)
  }
 
  const items = [];
  for (let i = 0; i < proyectosLength; i++) {
    items.push(i+1);
  } 

  const May = proyecto.category
  
  return (
    <div className='Carousel'>
              <Link to={`/proyecto/${proyecto.id}`}><img src={proyecto.img} alt="" /></Link>
              <h3 >{May.toUpperCase()}</h3>
              <h1 > {proyecto.nombre}</h1>
              <h4 >{proyecto.nombre}</h4>
              <p className='slider_description'>{proyecto.desc}</p>
              <button className='Left' onClick={handleAfter}><FaArrowLeft className='icon'/></button>
              <button className='Right' onClick={handleNext}><FaArrowRight className='icon'/></button>
              <div className='itemsAll d-flex-row d-flex-center'>
                {
                  items.map((_, index) => (
                    <button onClick={() => handleSelect(index)} className={imagenActual===index ? "item-active" : "item"}></button>
                  ))
                }
              </div>
          </div>
  )
}


export default Carousel