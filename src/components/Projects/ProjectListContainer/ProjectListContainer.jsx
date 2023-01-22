import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {pedirDatosProyectos} from '../../../Helpers/PedirDatos'
import ProjectList from '../ProjectList/ProjectList'

const ProjectListContainer = () => {

    const [proyectos, setProyectos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        pedirDatosProyectos()
            .then((res) => {
                if (!categoryId){
                    setProyectos(res)
                }else if(categoryId==="destacados"){
                    setProyectos(res.filter((proyecto) => proyecto.destacada === true))
                }else{
                    setProyectos(res.filter((proyecto) => proyecto.category === categoryId))
                }
                
            })
            .catch((error)=>console.log(error))
    }, [categoryId])

    


  return (
    <div>
        <ProjectList  proyectos={proyectos} />
    </div>
  )
}

export default ProjectListContainer