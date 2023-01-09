import { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection, where, addDoc, doc, setDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyBnQYfz89udegHmksfu1-WCcjpN6QsD7UY",
        authDomain: "universo-verde.firebaseapp.com",
        projectId: "universo-verde",
        storageBucket: "universo-verde.appspot.com",
        messagingSenderId: "439623627284",
        appId: "1:439623627284:web:68c6f61c40f8cc3677ad01",
        measurementId: "G-4SES6RCKDT"
      };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    
    const addProjects = async(newUser) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
        const user = await addDoc(collection(db, "proyectos"), newUser);
        return(user)
    }
    addProjects([
        {
            categoria:"Destacados",
            "desc-1":"Complejo Benedic 32 surge como una respuesta de la arquitectura a la falta de vivienda en la Austria que quedó después de la Segunda Guerra Mundial. Bajo la necesidad de la población por espacios de vivienda, y la falta de espacios y recursos de construcción, el Complejo Benedic 32 surge como un espacio en donde los habitantes puedan crear una comunidad independiente.",
            "desc-2":"El proyecto reúne vivencias y recuerdos culturales de miles de personas que fueron desterradas de sus hogares. Es, además de un complejo habitacional, un acervo histórico y cultural de muchas familias austríacas que encontraron un hogar en el Complejo Benedic 32. Cada uno de los hogares representa a una familia distinta, con sus valores, sus pertenencias y su personalidad. Es, en conjunto, una poesía arquitectónica edificada.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcomplejobenedic32%2Fbenedic-1.png?alt=media&token=a3840925-55bd-4838-bf0d-b5b3e0c7a18a",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcomplejobenedic32%2Fbenedic-2.png?alt=media&token=0f54d8c6-d234-45a0-8922-f1c9fd6d5150",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcomplejobenedic32%2Fbenedic-3.png?alt=media&token=140fcecb-0b3b-4d94-8133-f64d4be63f99",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcomplejobenedic32%2Fbenedic-4.png?alt=media&token=42b2a044-ea30-43b9-b9ee-a158f2f94018",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcomplejobenedic32%2Fbenedic-5.png?alt=media&token=b383cf46-6285-4a5d-a596-fe69f1dc28f6",
            pais:"Austria",
            subtitulo:"Architect’s Two",
            tipo:"Complejo Habitacional",
            titulo:"Complejo Benedic 32"
        },
        {
            categoria:"Destacados",
            "desc-1":"La Universidad del Vaticano abre las puertas al Museo del Vacío, un edificio histórico que fue adaptado para albergar más de 500 obras de arte provenientes de la era del Renacimiento, con artistas de talla mundial en la historia como Van Gogh, Matisse, Mussiet y más. El edificio había sido cerrado temporalmente desde el 2016 debido a algunas remodelaciones arquitectónicas provocadas por un sismos de 7.0 ocurrido el mismo año.",
            "desc-2":"El Museo del Vacío atesora más de 500 obras adquiridas por el Vaticano a lo largo de la historia en dónde se encuentran pinturas desde el Renacimiento (hechas para el Papa Francisco VI por artistas contratados por el Vaticano), hasta obras gráficas del periodo Post Moderno, la mayoría de ellas con una temática religiosa y encargadas por distintos Papas a lo largo de la historia.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fmuseodelvacio%2Fmuseovacio-1.png?alt=media&token=248da0be-ebce-4081-9951-6bf939b22df5",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fmuseodelvacio%2Fmuseovacio-2.png?alt=media&token=e5c72755-5c98-4e26-bd43-9cd2fa9c64d6",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fmuseodelvacio%2Fmuseovacio-3.png?alt=media&token=cc7ad9c5-50d6-4908-9847-0c53df04bfca",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fmuseodelvacio%2Fmuseovacio-4.png?alt=media&token=98c942b6-8f18-42d0-abad-25fc32bb144e",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fmuseodelvacio%2Fmuseovacio-5.png?alt=media&token=3291f69e-b0d3-46d0-96e5-c583e85df251",
            pais:"Roma",
            subtitulo:"Benito Carpe M.",
            tipo:"Arquitectura Cultural",
            titulo:"Museo del Vacío"
        },
        {
            categoria:"Destacados",
            "desc-1":"Para celebrar las fiestas navideñas, hemos seleccionado 10 diseños creativos de árboles de Navidad del archivo de Dezeen, incluido un árbol atrapado dentro de un cubo de hielo gigante y un árbol al revés. El resumen también incluye un árbol suspendido boca abajo del techo y una exhibición en una casa de campo de diseños de árboles de Navidad no convencionales. Siga leyendo para conocer interpretaciones imaginativas e inusuales de los árboles de Navidad:",
            "desc-2":"Árbol de Navidad al revés, Reino Unido, por Shirazeh Houshiary. La artista Shirazeh Houshiary diseñó este árbol de Navidad invertido para la Tate Britain de Londres en 2016, que se colgó del techo del edificio Millbank de la galería. Houshiary cubrió las raíces con pan de oro para resaltar una parte del pino que por lo general está oculta, al mismo tiempo que adopta la textura, el color, la forma y el olor naturales del resto del árbol.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Farbolnavidad%2Farbol-1.png?alt=media&token=fe5ee598-16eb-4d21-96ec-8821fe185967",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Farbolnavidad%2Farbol-2.png?alt=media&token=66dc87a8-9b97-4d92-b32f-3f428761e38c",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Farbolnavidad%2Farbol-3.png?alt=media&token=649b33e9-f192-4a4b-93f4-e27b85a4b1fe",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Farbolnavidad%2Farbol-4.png?alt=media&token=fa4ac365-24db-493e-b81a-7d170f17838a",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Farbolnavidad%2Farbol-5.png?alt=media&token=b0fce772-1ff0-4753-a04e-cd5eddb4d94b",
            pais:"Nueva York",
            subtitulo:"",
            tipo:"Amy Peacock",
            titulo:"Diez árboles de Navidad imaginativos e inusuales"
        },
        {
            categoria:"Destacados",
            "desc-1":"Un estudio de grabación, una estancia de creación de canciones y percusión, un escenario, un área de DJ y una biblioteca: todo esto es parte de Zvaigznaja KUBS, un pabellón móvil multifuncional que visitó y seguirá visitando ciudades de Letonia para inspirar a niños y jóvenes, y fomentar expresiones creativas en la música y las artes escénicas.",
            "desc-2":"Zvaigznajs KUBS es un artefacto ambiental visualmente atractivo, as{i como una plataforma funcional para las actividades creativas de Zvaigznajs. El elemento principal del proyecto son las paredes y el techo revestidos con una película bicromática que, según el punto de vista y la luz, crean un juego de colores, transparencias y atmósfera inusual. El diseño de KUBS ha sido influenciado por la necesidad de transformarlo y transportarlo regularmente. Al llegar al destino, el Zvaigznajs KUBS se coloca en el lugar del evento, se abre, se conecta a la electricidad y el evento puede comenzar.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fpabellonmovil%2Fpabellonmovil-1.png?alt=media&token=fd99d57b-aad1-4d14-96a4-a3fcafa96788",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fpabellonmovil%2Fpabellonmovil-2.png?alt=media&token=44333a5d-1c6a-42ae-b7a0-2d278dc6a370",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fpabellonmovil%2Fpabellonmovil-3.png?alt=media&token=e1027d8d-4d4c-4c75-94f1-fd1450b55722",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fpabellonmovil%2Fpabellonmovil-4.png?alt=media&token=6f66bf3c-0cce-4b37-9390-c47082a1d338",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fpabellonmovil%2Fpabellonmovil-5.png?alt=media&token=1bec2187-64c0-4a8b-8123-696c83c20e5f",
            pais:"Letonia",
            subtitulo:"NOONSOON",
            tipo:"Pabellón",
            titulo:"Pabellón móvil Zvaigznaja KUBS"
        },
        {
            categoria:"Destacados",
            "desc-1":"El arquitecto Manuel Aires Mateus ha completado las Casas de Verano en Pateos, Portugal, que parecen iguales pero en realidad son todas diferentes. La familia de cuatro casas de vacaciones cerca del popular pueblo costero de Melides tiene una fachada similar: un hastial de hormigón minimalista perforado por grandes aberturas que comparten el mismo contorno en forma de casa.",
            "desc-2":"Pero detrás de las paredes exteriores, Aires Mateus le dio a cada propiedad una disposición diferente de espacios interiores y exteriores. 'Nos interesaba crear una familia de espacios que permitieran diferentes experiencias', dijo Aires Mateus a Dezeen. 'Los espacios son siempre únicos, se distinguen por la forma en que se abren al exterior y protegen diferentes experiencias de vida'.",
            destacada:true,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasaverano%2Fcasaverano-1.png?alt=media&token=35689595-5926-4b03-9cdc-d4e5a662bca9",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasaverano%2Fcasaverano-2.png?alt=media&token=b10dac90-a670-418e-9fbc-478cf5531840",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasaverano%2Fcasaverano-3.png?alt=media&token=a9d6c626-e98f-4ae2-a19e-3c1cd2ee0331",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasaverano%2Fcasaverano-4.png?alt=media&token=aadb7dae-7421-461b-9cec-47c59c5d4870",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasaverano%2Fcasaverano-5.png?alt=media&token=84a4ef30-0581-469f-8acf-10a3c180b20f",
            pais:"Portugal",
            subtitulo:"Manuel Aires Mateus",
            tipo:"Casa - Habitación",
            titulo:"Casas de verano"
        },
        {
            categoria:"Arquitectura",
            "desc-1":"Studio Symbiosis ha completado una villa en Delhi, India, que se eleva desde sus terrenos ajardinados, formando un techo en terraza que está cubierto con plantas para maximizar el área verde del sitio. Los clientes de Villa KD45 le pidieron a Studio Symbiosis que diseñara una casa en una parcela angular rodeada por tres lados por otras villas, con el cuarto lado más corto mirando hacia el parque del vecindario adyacente.",
            "desc-2":"La casa está ocupada por un grupo familiar extenso de ocho, con el cliente y su familia viviendo en el primer piso, y la familia de su hermano y sus padres en la planta baja. El resumen requería la creación de un jardín generoso y la preservación de tres árboles grandes, lo que contribuye al espacio verde general.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fvillakd45%2Fvillakd-1.png?alt=media&token=9eab6433-9a09-4641-899d-0c3de32e6e88",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fvillakd45%2Fvillakd-2.png?alt=media&token=eca97c33-9b1d-4a55-8eec-0fdd1fcb6fbe",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fvillakd45%2Fvillakd-3.png?alt=media&token=74cea299-e412-45d7-b24b-86af9ca4355b",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fvillakd45%2Fvillakd-4.png?alt=media&token=8dec811a-f52a-413d-8dde-aa6c6490e8c0",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fvillakd45%2Fvillakd-5.png?alt=media&token=264664f8-712f-406a-9652-6f02d49394ed",
            pais:"India",
            subtitulo:"Studio Symbiosis",
            tipo:"Casa - Habitación",
            titulo:"Villa KD45"
        },
        {
            categoria:"Arquitectura",
            "desc-1":"El estudio japonés Apollo Architects & Associates ha completado Esprit House, una casa en Tokio con una forma de bloque de hormigón elevada sobre pilotes sobre un espacio de garaje. Diseñada para un cliente que trabaja en paisajismo, la vivienda de tres plantas fue creada por el estudio local Apollo Architects & Associates para explorar la casa como un lugar privado y 'abierto a la esfera pública'.",
            "desc-2":"'En la era del trabajo desde el hogar, los entornos de vida cómodos y las áreas intermedias que unen el interior y el exterior [son] cada vez más demandados, dijo la práctica. 'Quizás las características más buscadas de los futuros hogares serán un espíritu de alegría de vivir que permita a los residentes migrar libremente entre espacios interiores y exteriores', continuó.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fespirithouse%2Fespirithouse-1.png?alt=media&token=efb98092-89ba-4a59-ba43-54ceb90b1098",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fespirithouse%2Fespirithouse-2.png?alt=media&token=b9ee2673-1471-47de-b06e-99e472dd503c",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fespirithouse%2Fespirithouse-3.png?alt=media&token=8134ecd6-5e5e-4803-b7a4-b9657d87860f",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fespirithouse%2Fespirithouse-4.png?alt=media&token=7eb2a414-8516-43d9-a8bb-19bc23b59cc8",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fespirithouse%2Fespirithouse-5.png?alt=media&token=db10daca-be3e-4849-a778-bb53db5d931d",
            pais:"Tokio",
            subtitulo:"Apollo Architects & Associates",
            tipo:"Arquitectura Residencial",
            titulo:"Espirit House"
        },
        {
            categoria:"Arquitectura",
            "desc-1":"Las tejas de cedro y los techos asimétricos en forma de pirámide forman el exterior de Lilla Lane, una casa de varios volúmenes del estudio neoyorquino Oza Sabbeth Architects. El proyecto está ubicado en un lote frondoso de estilo suburbano en East Hampton, Long Island. Fue diseñado para una pareja sin hijos que quería un hogar con una fuerte conexión entre el interior y el exterior y mucho espacio para el entretenimiento.",
            "desc-2":"'Querían poder organizar cómodamente una fiesta llena de gente y sentir que estaba lo suficientemente lleno con solo ellos dos', dijo el estudio local Oza Sabbeth Architects. La propiedad estaba intercalada entre casas vecinas y ofrecía pocas vistas. En lugar de diseñar una casa que abarque el ancho del lote y forme un gran patio trasero, los arquitectos decidieron crear una casa más lineal que aproveche al máximo la propiedad.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasahamptons%2Fhamptons-1.png?alt=media&token=e0a366f2-9f22-4679-b590-5167fc9eaa28",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasahamptons%2Fhamptons-2.png?alt=media&token=b4f7e31a-8fe6-417f-96d1-4990dbabaf34",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasahamptons%2Fhamptons-3.png?alt=media&token=8ff5919b-178a-439a-baf8-db643857dc6f",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasahamptons%2Fhamptons-4.png?alt=media&token=612120ad-1460-4771-96cb-79bd4393c424",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasahamptons%2Fhamptons-5.png?alt=media&token=9c1ed942-1553-4867-b3e4-0e6aaec23529",
            pais:"Long Island",
            subtitulo:"Oza Sabbeth Architects",
            tipo:"Intervención Arquitectónica",
            titulo:"Casa Hamptons"
        },
        {
            categoria:"Arquitectura",
            "desc-1":"EBBA Architects ha completado la ampliación de una casa en el este de Londres que combina materiales de estilo brutalista con detalles inspirados en una villa romana clásica. El proyecto, llamado Cast House, es una extensión trasera de una casa adosada victoriana, creando una habitación ampliada que incorpora una cocina, un comedor y un jardín de invierno. El diseño de EBBA presenta una serie de detalles distintivos, que incluyen superficies de concreto pigmentado marrón, ventanas con paneles de madera, un techo abovedado y una pared de plantas trepadoras.",
            "desc-2":"El objetivo era combinar materiales utilitarios de gran textura, típicos de la arquitectura brutalista, con una disposición formal más clásica. 'Comenzamos con dos imágenes en mente', dijo el arquitecto Benni Allan, fundador del estudio con sede en Londres. 'Uno era de un jardín enmarcado por un interior esculpido con mucha textura, y el otro era de un espacio central en una villa romana, similar a Can Lis de Jørn Utzon', le dijo a Dezeen, refiriéndose a una famosa casa de verano de los años 70 en Mallorca.",
            destacada:false,
            "foto-main-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasthouse%2Fcasthouse-1.png?alt=media&token=37d6cef5-5982-4d77-9c5f-8b092b67944e",
            "foto-main-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasthouse%2Fcasthouse-2.png?alt=media&token=e610a1fa-a8de-4e1f-985c-7af37895f299",
            "foto-main-3":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasthouse%2Fcasthouse-3.png?alt=media&token=e8be695c-9302-47de-aa3a-069f570b0536",
            "foto-extra-1":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasthouse%2Fcasthouse-4.png?alt=media&token=d85eeba0-23ce-46d3-81a1-b79aa6520dab",
            "foto-extra-2":"https://firebasestorage.googleapis.com/v0/b/deezen-1a1d3.appspot.com/o/proyectos%2Fcasthouse%2Fcasthouse-5.png?alt=media&token=a6cbc521-f97a-43db-934d-ea777f3568c1",
            pais:"Londres",
            subtitulo:"EBBA",
            tipo:"Intervención Arquitectónica",
            titulo:"Cast House"
        },
        {
            categoria:"Interiorismo",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Interiorismo",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Interiorismo",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Interiorismo",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Interiorismo",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
        {
            categoria:"Arquitectura",
            "desc-1":"",
            "desc-2":"",
            destacada:false,
            "foto-main-1":"",
            "foto-main-2":"",
            "foto-main-3":"",
            "foto-extra-1":"",
            "foto-extra-2":"",
            pais:"",
            subtitulo:"",
            tipo:"",
            titulo:""
        },
    ])

    const searchCollections = async (nameCollection) => {
        // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTOS OBJETOS DE LA BASE DE DATOS.
        const collectionsData = await getDocs(query(collection(db, nameCollection)));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return collections;
    };

    const collectionByParam = async (nameCollection, param, type) => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
        const gamesNFS = await getDocs(query(collection(db, nameCollection), where()));
        const games = gamesNFS.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return games;
    };

    const getUser = async(idUser) => {
        // OBTENER UN USUARIO DE FIREBASE 
        const users = await searchCollections("usuarios")
        return(users.filter(user=>user.id===idUser))
    }

    const addUser = async(newUser) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
        const user = await addDoc(collection(db, "usuarios"), newUser);
        return(user)
    }

    // PARAMETROS QUE DEBE TENER EL DOCUMENTO "USER"
    // usuarioEjemplo={
    //     nombreApellido:"",
    //     contrasena:"",
    //     favoritos:[],
    //     carrito:[]
    // }
    
    const actionToFavsOrCart = async(idUser,typeOf,typeArray)=>{
        // AGREGAR O ELIMINAR UN FAVORITO O UN PRODUCTO AL CARRITO DE CIERTO USUARIO
        const user =  doc(db, 'usuarios', idUser);
        await setDoc(user, { typeOf: typeArray }, { merge: true });
    }

    const emailJS = async (data)=>{
        // ARRAY NECESARIO DE "data"
        // const array= {
        //     nombre:"",
        //     contrasena:"",
        //     toMail:""
        // }

        emailjs.send('service_rkbguuj', 'template_7y8c547', data)
            .then(function(response) {
                console.log(response)
            return(true)
            }, function(error) {
                console.log(error)
            return(false)
        });
    }

    return (
        <UseApiContext.Provider value={{ searchCollections, collectionByParam, getUser, addUser, actionToFavsOrCart, emailJS }}>
            {children}
        </UseApiContext.Provider>
    );
};
