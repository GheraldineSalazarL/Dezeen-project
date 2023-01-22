import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {pedirDatosProyectos} from '../../../Helpers/PedirDatos'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

 const ProjectDetailContainer = () => {

  const [detalleProyecto, setDetalleProyecto] = useState(null)
  const {proyectoId} = useParams()
  console.log(proyectoId)
  console.log(detalleProyecto)

  useEffect(() => {
    pedirDatosProyectos()
        .then((res) => {
          setDetalleProyecto(res.find((proy) => proy.id === Number(proyectoId)))
            
        })
        .catch((error)=>console.log(error))
  }, [])

  return (
    <div>
      <ProjectDetail detalleProyecto={detalleProyecto}/>
      {/* <NewsletterListContainer/> */}
      {/* <h1>prueba</h1> */}
    </div>
  )
}

export default ProjectDetailContainer