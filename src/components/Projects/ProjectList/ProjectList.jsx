import React from 'react'
import Project from '../Project/Project'

const ProjectList = ({proyectos = []}) => {
  return (
    <div className="">
        {
            proyectos.map((proy) => {
                return <Project proyecto={proy} key={proy.id}/>
                
            })
        }
    </div>
  )
}

export default ProjectList