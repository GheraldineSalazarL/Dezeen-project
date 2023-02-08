import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import {pedirDatosProyectos} from '../../../Helpers/PedirDatos'
import ProjectDetail from '../ProjectDetail/ProjectDetail'
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../../context/ApiContext'
import NavbarProjects from '../../NavbarProjects/NavbarProjects';

 const ProjectDetailContainer = () => {

  const [detalleProyecto, setDetalleProyecto] = useState({ })
  const {proyectoId} = useParams()

  useEffect(() => {
    // pedirDatosProyectos()
        // .then((res) => {
        //   setDetalleProyecto(res.find((proy) => proy.id === Number(proyectoId)))
            
        // })
        // .catch((error)=>console.log(error))
      const docRef = doc(db, 'proyectos', proyectoId)
      getDoc(docRef)
        .then((doc) => {
          setDetalleProyecto({id:doc.id, ...doc.data()})
        })
        .catch((error)=>console.log(error))
  }, [])

  return (
    <div>
      <NavbarProjects/>
      <ProjectDetail proyecto={detalleProyecto}/>
    </div>
  )
}

export default ProjectDetailContainer