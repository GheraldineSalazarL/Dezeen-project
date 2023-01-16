import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { FaArrowRight  } from  "react-icons/fa";

const Home = () => {
  return (
    <div className='Home font-roboto-cond black'>
        <div className='Carousel'>Carousel</div>

        <div className='ContentHome'>
          <div>Noticias destacadas</div>
          
          <hr className='Separator'/>

          <div className='RecommendProjects'>
            <div className='SubTitleProjects d-flex-row font-w-400'>
              <h3 >Dezeen te recomienda</h3>
              <div className='ArrowRight d-flex-row'>
                <p>Siguiente proyecto</p>
                <FaArrowRight />
              </div>
            </div>
            <ItemListContainer />
          </div>

          <hr className='Separator'/>
          
        </div>
        
    </div>
  )
}

export default Home