import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectList from '../ProjectList/ProjectList'
import { FaArrowRight  } from  "react-icons/fa";
import useProyectos from '../../../hooks/useProyectos';

const ProjectListContainer = () => {

    const entry = 'ProjectListContainer'
    const {proyectos} = useProyectos(entry)
    const location = useLocation()

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