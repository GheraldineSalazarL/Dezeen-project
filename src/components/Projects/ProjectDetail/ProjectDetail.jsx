import React from 'react'
import { BsStar } from "react-icons/bs";
import NewsletterListContainer from '../../Newsletters/NewsletterListContainer/NewsletterListContainer';



const ProjectDetail = ({detalleProyecto}) => {

   console.log(detalleProyecto)

  return (
    <div className='ProjectDet d-flex-row'>
        <div className='ProjectDetail d-flex-column font-roboto-cond font-w-400'>
            <h2>{detalleProyecto.nombre}</h2>
            <img className='img1' src={detalleProyecto.img} alt="" />
            <div className='typeProject d-flex-row'>
                <h3>{detalleProyecto.nombre}</h3>
                <div className='d-flex-row'>
                    <div className='ScoreProject d-flex-column'>
                        <p>¿Te gustó éste artículo?</p>
                        <div>
                            <BsStar className='star'/>
                            <BsStar className='star'/>
                            <BsStar className='star'/>
                            <BsStar className='star'/>
                            <BsStar className='star'/>
                        </div>
                    </div>
                    <button className='white-button'>Guarda este proyecto</button>
                </div>
            </div>
            <p className='descProject'>{detalleProyecto.desc}</p>

            <img className='img2' src={detalleProyecto.img} alt="" />
            <p className='descProject'>{detalleProyecto.desc}</p>
            
            <div className='images d-flex-column'>
                <img className='img3' src={detalleProyecto.img} alt="" />
                <div className='imgs d-flex-row'>
                    <img className='imgx' src={detalleProyecto.img} alt="" />
                    <img className='imgx' src={detalleProyecto.img} alt="" />
                    <img className='imgx' src={detalleProyecto.img} alt="" />
                    <img className='imgx' src={detalleProyecto.img} alt="" />
                </div>
            </div>
            
            
        </div>

        <NewsletterListContainer/>
    </div>
  )
}

export default ProjectDetail