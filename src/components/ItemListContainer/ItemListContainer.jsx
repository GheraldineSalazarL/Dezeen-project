import React, { useEffect } from 'react'
import { useState } from 'react'
import ProjectList from '../ProjectList/ProjectList'

const proyectos = [
    {
        id:1,
        nombre:"Proyecto1",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfkl sjdflkjsdkfjslkdjflksdjflksj dflkjsdlfkjsd l kfjlskdj flskd jflksdjflksj d flkj sdlkf jslkdjf lskdjflksdjfl ksdjlkkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkk"
    },
    {
        id:2,
        nombre:"Proyecto2",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk"
    },
    {
        id:3,
        nombre:"Proyecto3",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk"
    },
    {
        id:4,
        nombre:"Proyecto4",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkk"
    }
]

const pedirDatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(proyectos)
        },2000)
    })
}

const ItemListContainer = () => {

    const [proyectos, setProyectos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProyectos(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => { 
                console.log("Fin del proceso")
            })
    }, [])


  return (
    <div>
        <ProjectList  proyectos={proyectos}/>
    </div>
  )
}

export default ItemListContainer