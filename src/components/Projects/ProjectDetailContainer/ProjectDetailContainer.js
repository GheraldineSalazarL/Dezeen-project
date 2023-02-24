import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetail from '../ProjectDetail/ProjectDetail'
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../../context/ApiContext'
import NavbarProjects from '../../NavbarProjects/NavbarProjects';

 const ProjectDetailContainer = () => {

  const [detalleProyecto, setDetalleProyecto] = useState({ })
  const {proyectoId} = useParams()

  useEffect(() => {
      const docRef = doc(db, 'proyectos', proyectoId)
      getDoc(docRef)
        .then((doc) => {
          setDetalleProyecto({id:doc.id, ...doc.data()})
        })
  }, [])

  return (
    <div>
      <NavbarProjects/>
      <ProjectDetail proyecto={detalleProyecto}/>
    </div>
  )
}

export default ProjectDetailContainer