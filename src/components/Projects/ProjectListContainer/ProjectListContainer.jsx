import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
// import {pedirDatosProyectos} from '../../../Helpers/PedirDatos'
import ProjectList from '../ProjectList/ProjectList'
import { FaArrowRight  } from  "react-icons/fa";
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../../context/ApiContext'
import useProyectos from '../../../hooks/useProyectos';

const ProjectListContainer = () => {

    const entry = 'ProjectListContainer'
    const {categoryId} = useParams()
    const {proyectos} = useProyectos(entry)
    const location = useLocation()

    // const [proyectos, setProyectos] = useState([])
    // const {categoryId} = useParams()
    // const location = useLocation()

    // useEffect(() => {
    //     const proyectosRef = collection(db, 'proyectos')
    //     const q = categoryId ? query(proyectosRef, where('categoria', '==', categoryId)) : proyectosRef
    //     getDocs(q)
    //         .then((resp) =>{
    //             const proyectosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
    //             setProyectos(proyectosDB)
    //         })
    //         .catch((error)=>console.log(error))
    // }, [categoryId])

    const [viewAcual, setViewActual] = useState(0)

    const handleAfter = () => {
      setViewActual (viewAcual === proyectos.length-1 ? 0 : viewAcual+1)
    }


  return (
    <>
        {
            location.pathname==="/"
            ?
                <div>
                    <div className='Headers'>
                        <div className='SubTitle d-flex-row font-w-400'>
                        <h3 >Dezeen te recomienda</h3>
                        <button onClick={handleAfter} className='ArrowRight d-flex-row font-roboto-cond'>
                            <p>Siguiente proyecto</p>
                            <FaArrowRight className='icon'/>
                        </button>
                        </div>
                        <ProjectList  proyectos={proyectos} viewAcual={viewAcual}/>
                    </div>
                </div>
            :
                <ProjectList  proyectos={proyectos} />
        }
    </>
  )
}

export default ProjectListContainer