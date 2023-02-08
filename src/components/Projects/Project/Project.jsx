import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Project = ({proyecto}) => {

    const location = useLocation()
    
    return (
      <div className={`Project ${location.pathname==="/" ? "ProjectMarginRigth" : "ProjectMarginBottom"}`}>
        <h2 className={location.pathname!=="/" ? "Tittle-active" : "Tittle-none"}>{proyecto.titulo}</h2>
          <div className='ImagesProject d-flex-row'>
              <img className='ImagePrincipal' src={proyecto["foto-main-1"]} alt="" />
              <div className='ImagesProjectColumn d-flex-column'>
                  <img src={proyecto["foto-main-2"]} alt="" height="131px" width="197px"/>
                  <img src={proyecto["foto-main-3"]} alt="" height="197px" width="197px"/>
                  <img src={proyecto["foto-extra-1"]} alt="" height="295px" width="197px"/>
              </div>
          </div>
          <div className='TitleProject d-flex-row font-w-400'>
              <h3>{proyecto.tipo}</h3>
              <Link to={`/proyectos/${proyecto.categoria}/${proyecto.id}`} className='buttonProject white-button d-flex-center '>Leer el artículo</Link>
          </div>
          <p className='DescriptionProject'>{proyecto["desc-1"]}</p>
      </div>
    )
  }

export default Project