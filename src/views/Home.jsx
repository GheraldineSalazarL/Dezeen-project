import React from 'react'
import { FaArrowRight  } from  "react-icons/fa";
import { Link } from 'react-router-dom';
import CarouselListContainer from '../components/Carousel/CarouselListContainer/CarouselListContainer';
import NewListContainer from '../components/News/NewsListContainer/NewListContainer';
import ProjectListContainer from '../components/Projects/ProjectListContainer/ProjectListContainer';

const Home = () => {
  return (
    <div className='Home font-roboto-cond black'>
        
        <CarouselListContainer/>

        <div className='ContentHome'>

          <div className='Title'>
            <div className='SubTitle d-flex-row font-w-400'>
              <h3>Noticias destacadas</h3>
              <button className='ArrowRight d-flex-row font-roboto-cond'>
                <p>Siguiente página</p>
                <FaArrowRight className='icon'/>
              </button>
            </div>
            <NewListContainer/>
          </div>
          
          <hr className='Separator'/>

          <div className='Title'>
            <div className='SubTitle d-flex-row font-w-400'>
              <h3 >Dezeen te recomienda</h3>
              <div className='ArrowRight d-flex-row'>
                <p>Siguiente proyecto</p>
                <FaArrowRight />
              </div>
            </div>
            <ProjectListContainer />
          </div>

          <hr className='Separator'/>

          <div className='Magazine d-flex-row d-flex-center'>
            <img className='ImageMagazine' src="https://via.placeholder.com/250" alt="" />
            <div className='TextMagazine font-w-400 d-flex-column d-flex-center'>
              <h2>La revista más popular e influyente del mundo.</h2>
              <p>Nuestra misión es simple: traerte una selección cuidadosamente editada de los mejores proyectos y noticias de arquitectura, diseño e interiores de todo el mundo. 
              <br />
              <br />
              Marcus Fairs lanzó Dezeen en noviembre de 2006. En 2021, Dezeen fue adquirida por el grupo de medios danés JP/Politiken Media Group.</p>
              <button className='blue-button d-flex-center'>Leer más sobre esto</button>
            </div>
          </div>

          <hr className='Separator'/>

          <div className='Recommend'>
            <div className='SubTitle d-flex-row font-w-400'>
              <h3 >Proyectos de</h3>
              <div className='ArrowRight d-flex-row'>
                <p>Siguiente proyecto</p>
                <FaArrowRight />
              </div>
            </div>
            <ProjectListContainer />
          </div>

          <hr className='Separator'/>

          <div className='Creators d-flex-center d-flex-column'>
            <h2 className='TitleCreators'>Conoce al equipo que creó el sitio web</h2>
            <div className='PhotosCreators'>
              <img src="https://via.placeholder.com/250" alt="" />
              <img src="https://via.placeholder.com/250" alt="" />
              <img src="https://via.placeholder.com/250" alt="" />
            </div>
          </div>

        </div>

    </div>
  )
}

export default Home