import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatosProyectos } from '../../../Helpers/PedirDatos'
import CarouselList from '../CarouselList/CarouselList'

const CarouselListContainer = () => {

    const [proyectos, setProyectos] = useState([])
    const {categoryId} = useParams()

    useEffect(()=> {
      pedirDatosProyectos()
      .then((res) => {
        if (!categoryId || categoryId==="destacados"){
            setProyectos(res.filter((proyecto) => proyecto.destacada === true))
        }else{
            setProyectos(res.filter((proyecto) => proyecto.category === categoryId && proyecto.destacada === true)) //muestra los de la categoria que son destacados
        }
        
      })
      .catch((error)=>console.log(error))
    },[categoryId])

    
  return (
    <div>
      <CarouselList proyectos={proyectos} />
    </div>
  )
}

export default CarouselListContainer

