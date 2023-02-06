import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatosProyectos } from '../../../Helpers/PedirDatos'
import ProjectList from '../ProjectList/ProjectList'
import { FaArrowRight  } from  "react-icons/fa";

const ProjectListContainerCategory = () => {

    const [proyectos, setProyectos] = useState([])

    const Categories = []
    for (let i=0; i<proyectos.length; i++){
        if(!Categories.includes(proyectos[i].category)) Categories.push(proyectos[i].category)
    }

    const categoryId = Categories[Math.floor(Math.random() * Categories.length)];

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

    const [viewAcual, setViewActual] = useState(0)

    const handleAfter = () => {
      setViewActual (viewAcual === proyectos.length-1 ? 0 : viewAcual+1)
    }    

  return (
    <div>
        <div className='Headers'>
            <div className='SubTitle d-flex-row font-w-400'>
            <h3>Proyectos de {categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : ""}</h3>
            <button onClick={handleAfter} className='ArrowRight d-flex-row font-roboto-cond'>
                <p>Siguiente proyecto</p>
                <FaArrowRight className='icon'/>
            </button>
            </div>
            <ProjectList  proyectos={proyectos} viewAcual={viewAcual}/>
        </div>
    </div>
  )
}

export default ProjectListContainerCategory