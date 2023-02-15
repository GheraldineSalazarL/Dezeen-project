import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../context/ApiContext'
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