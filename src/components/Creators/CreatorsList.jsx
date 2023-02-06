import React from 'react'
import Creators from './Creators'

const creadores = [
    {
        id: 1,
        foto: "https://via.placeholder.com/250",
        nombre: "Timoteo Gambella",
        cargo: "Lider y Desarrollador",
        linkedin: "",
        instagram: "",
        email: ""
    },
    {
        id: 2,
        foto: "https://via.placeholder.com/250",
        nombre: "Erick Emmanuel Magallán Gonzales",
        cargo: "Diseñador UX/UI",
        linkedin: "",
        instagram: "",
        email: ""
    },
    {
        id: 3,
        foto: "https://via.placeholder.com/250",
        nombre: "Gheraldine Salazar Lasso",
        cargo: "Desarrolladora",
        linkedin: "",
        instagram: "",
        email: ""
    }
]

const CreatorsList = () => {
  return (
    <div className='Creators d-flex-center d-flex-column'>
        <h2 className='TitleCreators'>Conoce al equipo que creó el sitio web</h2>
        <div className='PhotosCreators'>
            {
                creadores.map((creador) => {
                    return <Creators creador={creador} key={creador.id}/>
                })    
            }
        </div>
       
    </div>
  )
}

export default CreatorsList