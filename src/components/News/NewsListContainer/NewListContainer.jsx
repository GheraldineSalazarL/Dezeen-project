import React from 'react'
import { useEffect, useState } from 'react'
import { pedirDatosNoticias } from '../../../Helpers/PedirDatos'
import NewsList from '../NewsList/NewsList'

const NewListContainer = () => {

    const [noticias, setNoticias] = useState([])
    useEffect(() => {
        pedirDatosNoticias()
            .then((res) => {
                setNoticias(res)
            })
            .catch((error)=>console.log(error))
    }, [])

  return (
    <NewsList  noticias={noticias}/>
  )
}

export default NewListContainer