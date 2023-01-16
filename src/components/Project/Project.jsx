import React from 'react'

const Project = ({proyecto}) => {
  return (
    <div className='Project'>
        <div className='ImagesProject d-flex-row'>
            <img className='ImagePrincipal' src={proyecto.img} alt="" height="661px" width="738px"/>
            <div className='ImagesProjectColumn d-flex-column'>
                <img src={proyecto.img} alt="" height="131px" width="197px"/>
                <img src={proyecto.img} alt="" height="197px" width="197px"/>
                <img src={proyecto.img} alt="" height="295px" width="197px"/>
            </div>
        </div>
        <div className='TitleProject d-flex-row font-w-400'>
            <h3>{proyecto.nombre}</h3>
            <button className='white-button'>Leer el artículo</button>
        </div>
        <h3 className='DescriptionProject'>{proyecto.desc}</h3>
    </div>
  )
}

export default Project