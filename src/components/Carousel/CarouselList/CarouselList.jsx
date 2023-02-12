import React from 'react'
import Carousel from '../Carousel/Carousel'
import { useState } from 'react';

const CarouselList = ({proyectos=[]}) => {

  const [imagenActual, setImagenActual] = useState(0)

  return (
    <div className='CarouselList'>
        {
            proyectos.map((proy,index) => {
                return(
                  <>
                    {
                      imagenActual === index
                      &&
                      <Carousel proyecto={proy} proyectosLength={proyectos.length} imagenActual={imagenActual} setImagenActual={setImagenActual} key={proy.id} />
                    }
                  </>
                )
            })
        }
    </div>
  )
}

export default CarouselList