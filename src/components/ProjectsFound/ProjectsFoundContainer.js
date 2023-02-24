import React from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../../hooks/useProyectos'
import ProjectsFoundList from './ProjectsFoundList/ProjectsFoundList'

const ProjectsFoundContainer = () => {

    const {searchId} = useParams()
    const entry = 'ProjectsFoundContainer'
    const {proyectos} = useProyectos(entry)

  return (
    <ProjectsFoundList  projectsFound={proyectos}  searchId={searchId}/>
  )
}

export default ProjectsFoundContainer