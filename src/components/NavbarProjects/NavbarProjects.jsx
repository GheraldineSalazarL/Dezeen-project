import { collection, getDocs } from 'firebase/firestore'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
// import { pedirDatosProyectos } from '../../Helpers/PedirDatos'
import {db} from '../../context/ApiContext'

const NavbarProjects = () => {
  const [proyectos, setProyectos] = useState([])
  const {categoryId} = useParams()

  // pedirDatosProyectos()
  //   .then((res) => {
  //     setProyectos(res)
  //   })
  //   .catch((error)=>console.log(error))

  useEffect(() => {
    const proyectosRef = collection(db, 'proyectos')
    getDocs(proyectosRef)
            .then((resp) =>{
                const proyectosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                setProyectos(proyectosDB)
            })
            .catch((error)=>console.log(error))
  }, [])

  const Categories = []
  for (let i=0; i<proyectos.length; i++){
    if(!Categories.includes(proyectos[i].categoria)) Categories.push(proyectos[i].categoria)
  } 


  return (
        <nav className='MenuProyectos d-flex-row d-flex-center font-w-400' >
          {
            Categories.map((cat) => {
                  return <NavLink to={`/proyectos/${cat}`} className={`ItemMenuProyecto ${cat===categoryId ? "colorSelect" : ""}`}>{cat}</NavLink>
                  
              })
          }
        </nav>
  )
}

export default NavbarProjects