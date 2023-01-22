import React from 'react'
import { useEffect, useState } from 'react'
import { pedirDatosNoticias } from '../../../Helpers/PedirDatos'
import NewsList from '../NewsList/NewsList'
import { FaArrowRight  } from  "react-icons/fa";

const NewListContainer = () => {

    const [noticias, setNoticias] = useState([])
    useEffect(() => {
        pedirDatosNoticias()
            .then((res) => {
                setNoticias(res)
            })
            .catch((error)=>console.log(error))
    }, [])

    const [viewAcual, setViewActual] = useState(0)

    const handleAfter = () => {
      setViewActual (viewAcual === noticias.length-1 ? 0 : viewAcual+1)
    }

  return (
    <div className='Headers'>
      <div className='SubTitle d-flex-row font-w-400'>
        <h3>Noticias destacadas</h3>
        <button onClick={handleAfter} className='ArrowRight d-flex-row font-roboto-cond'>
          <p>Siguiente página</p>
          <FaArrowRight className='icon'/>
        </button>
      </div>
      <NewsList  noticias={noticias} viewAcual={viewAcual}/>
    </div>
  )
}

export default NewListContainer