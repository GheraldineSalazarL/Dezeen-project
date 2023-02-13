import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import { pedirDatosProyectos } from '../../../Helpers/PedirDatos'
import CarouselList from '../CarouselList/CarouselList'
import {db} from '../../../context/ApiContext'
import useProyectos from '../../../hooks/useProyectos'

const CarouselListContainer = () => {

    const entry = 'CarouselListContainer'
    const {proyectos} = useProyectos(entry)
    // const {categoryId} = useParams()

    // const newProyectos=[]
    // let proyectosCaruosel 
    // if(!categoryId){
    //   proyectosCaruosel = proyectos
    // } else {
    //   for(let i=0; i<3; i++){
    //     newProyectos.push(proyectos[Math.floor(Math.random() * proyectos.length)])
    //   }
    //   proyectosCaruosel = newProyectos
    // }

    // const [proyectos, setProyectos] = useState([])
    // const {categoryId} = useParams()

    // useEffect(()=> {
    //   const proyectosRef = collection(db, 'proyectos')
    //   const q = !categoryId ? query(proyectosRef,where('destacada', '==', true)) : query(proyectosRef,where('categoria', '==', categoryId))      
      
    //   getDocs(q)
    //         .then((resp) =>{
    //             const proyectosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
    //             const newProyectosDB=[]
    //             if(!categoryId){
    //               setProyectos(proyectosDB)
    //             } else {
    //               for(let i=0; i<3; i++){
    //                 newProyectosDB.push(proyectosDB[Math.floor(Math.random() * proyectosDB.length)])
    //               }
    //               setProyectos(newProyectosDB)
    //             }
    //         })
    //         .catch((error)=>console.log(error))
    // },[categoryId])

    
  return (
    <div>
      <CarouselList proyectos={proyectos} />
    </div>
  )
}

export default CarouselListContainer

