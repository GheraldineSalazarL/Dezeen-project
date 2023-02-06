const proyectos = [
    {
        id: 1,
        nombre:"Proyecto1",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfkl sjdflkjsdkfjslkdjflksdjflksj dflkjsdlfkjsd l kfjlskdj flskd jflksdjflksj d flkj sdlkf jslkdjf lskdjflksdjfl ksdjlkkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkk",
        category:"catalogo",
        destacada: true,
    },
    {
        id: 2,
        nombre:"Proyecto2",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"arquitectura",
        destacada: true,
    },
    {
        id: 3,
        nombre:"Proyecto3",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"interiorismo",
        destacada: false,
    },
    {
        id: 4,
        nombre:"Proyecto4",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkk",
        category:"diseño",
        destacada: false,
    },
    {
        id: 5,
        nombre:"Proyecto5",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfkl sjdflkjsdkfjslkdjflksdjflksj dflkjsdlfkjsd l kfjlskdj flskd jflksdjflksj d flkj sdlkf jslkdjf lskdjflksdjfl ksdjlkkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkk",
        category:"catalogo",
        destacada: true,
    },
    {
        id: 6,
        nombre:"Proyecto6",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"arquitectura",
        destacada: true,
    },
    {
        id: 7,
        nombre:"Proyecto7",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"interiorismo",
        destacada: false,
    },
    {
        id: 8,
        nombre:"Proyecto8",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkk",
        category:"diseño",
        destacada: false,
    },
    {
        id: 9,
        nombre:"Proyecto9",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfkl sjdflkjsdkfjslkdjflksdjflksj dflkjsdlfkjsd l kfjlskdj flskd jflksdjflksj d flkj sdlkf jslkdjf lskdjflksdjfl ksdjlkkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkk",
        category:"catalogo",
        destacada: true,
    },
    {
        id: 10,
        nombre:"Proyecto10",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"arquitectura",
        destacada: true,
    },
    {
        id: 11,
        nombre:"Proyecto11",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"interiorismo",
        destacada: false,
    },
    {
        id: 12,
        nombre:"Proyecto12",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkk",
        category:"diseño",
        destacada: false,
    },
    {
        id: 13,
        nombre:"Proyecto13",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfkl sjdflkjsdkfjslkdjflksdjflksj dflkjsdlfkjsd l kfjlskdj flskd jflksdjflksj d flkj sdlkf jslkdjf lskdjflksdjfl ksdjlkkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkk",
        category:"catalogo",
        destacada: true,
    },
    {
        id: 14,
        nombre:"Proyecto14",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"arquitectura",
        destacada: true,
    },
    {
        id: 15,
        nombre:"Proyecto15",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdf klsjdflkjsdkfjslkdjflksdjflk sjdflkjsdlfkj s dlkfjlsk djfls kdjflksdjflk s jdfl kjsdl kfjslkd jflskdjflksdj flksdjlk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkkk",
        category:"interiorismo",
        destacada: false,
    },
    {
        id: 16,
        nombre:"Proyecto16",
        img:"https://via.placeholder.com/250",
        desc:"Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk kkkkkkkkkkk kkkkkkkkk kk kkk kkk kkkkk kkkkkkkk kkkkkkkkk kkkkkkkk kkkkkkkk kkkkkkkk kk kkkkk k kkkkkkkkk kkkkkkkk kkkkkkkkk kkkkkkk kk kkkk",
        category:"diseño",
        destacada: false,
    }
]

const noticias = [
    {
        id: 1,
        nombre: "noticia1",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        nombre: "noticia2",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        nombre: "noticia3",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        nombre: "noticia4",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    }
]

const newsletters = [
    {
        id: 1,
        nombre: "new1",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        nombre: "new2",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        nombre: "new3",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        nombre: "new4",
        detail: "Loremfksjdfk lsjdflkjsdkfjslkdjflksdjflks jdflkjsdlfkjs d lkfjlskd jflsk djflksdjflks j dflk jsdlk fjslkdj flskdjflksdjf lksdjlkk kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkk",
        img: "https://via.placeholder.com/250"
    }
]
export const pedirDatosProyectos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(proyectos)
            
        },1000)
    })
}

export const pedirDatosNoticias = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(noticias)
        },1000)
    })
}

export const pedirDatosNewsletter = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(newsletters)
        },1000)
    })
}
