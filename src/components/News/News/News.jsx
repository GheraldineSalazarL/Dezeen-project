import React from 'react'

const News = ({noticia}) => {



  return (
    <div className='News d-flex-column'>
        <img className='ImageNews' src={noticia.img} alt="" />
        <h3>{noticia.nombre}</h3>
        <p className='DescriptionNews'>{noticia.detail}</p>
    </div>
  )
}

export default News