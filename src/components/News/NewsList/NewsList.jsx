import React from 'react'
import News from '../News/News'

const NewsList = ({noticias = []}) => {
  return (
    <div className="d-flex-row">
        {
            noticias.map((noticia) => {
                return <News noticia={noticia} key={noticia.id} />
                
            })
        }
    </div>
  )
}

export default NewsList