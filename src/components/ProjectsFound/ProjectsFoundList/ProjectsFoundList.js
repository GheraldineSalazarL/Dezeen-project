import React from 'react'
import ProjectFound from '../ProjectFound/ProjectFound'

const ProjectsFoundList = ({projectsFound=[], searchId}) => {

    // const projectsFound = []

    // for(let i=0; i<proyectos.length; i++){
    //     proyectos[i].titulo.toLowerCase().includes(searchId.toLocaleLowerCase) 
    //     && projectsFound.push(proyectos[i])
    // }

    // console.log (projectsFound)
    // console.log(proyectos[0].titulo)
    
    console.log(projectsFound.titulo)
  

  return (
    <div className='ProjectsFound font-roboto-cond'>
      <h1>Resultados para {searchId ? searchId: ""}</h1>
      <div className='ProjectsFoundList'>
        {
            projectsFound.map((proy) => {
                const searchText = proy.titulo.toLowerCase().normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").search(searchId.toLowerCase())
                console.log(searchText)
                if(searchText > -1){
                  return <ProjectFound projectFound={proy} key={proy.id}/>
                }
            })
        }
      </div>
    </div>
  )
}

export default ProjectsFoundList