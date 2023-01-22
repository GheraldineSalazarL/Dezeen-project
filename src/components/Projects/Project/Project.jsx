import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({proyecto}) => {
    return (
      <div className='Project'>
          <div className='ImagesProject d-flex-row'>
              <img className='ImagePrincipal' src={proyecto.img} alt="" />
              <div className='ImagesProjectColumn d-flex-column'>
                  <img src={proyecto.img} alt="" height="131px" width="197px"/>
                  <img src={proyecto.img} alt="" height="197px" width="197px"/>
                  <img src={proyecto.img} alt="" height="295px" width="197px"/>
              </div>
          </div>
          <div className='TitleProject d-flex-row font-w-400'>
              <h3>{proyecto.nombre}</h3>
              <Link to={`/proyecto/${proyecto.id}`} className='buttonProject white-button d-flex-center '>Leer el artículo</Link>
          </div>
          <p className='DescriptionProject'>{proyecto.desc}</p>
          <p>{proyecto.category}</p>
      </div>
    )
  }

export default Project