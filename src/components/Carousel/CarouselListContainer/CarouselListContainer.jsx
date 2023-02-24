import React from 'react'
import CarouselList from '../CarouselList/CarouselList'
import useProyectos from '../../../hooks/useProyectos'

const CarouselListContainer = () => {

    const entry = 'CarouselListContainer'
    const {proyectos} = useProyectos(entry)
    
  return (
    <div>
      <CarouselList proyectos={proyectos} />
    </div>
  )
}

export default CarouselListContainer

