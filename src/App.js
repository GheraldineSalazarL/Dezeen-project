import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sigin from "./components/Sigin/Sigin.jsx";
import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";
import Home from "./views/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProjectListContainer from "./components/Projects/ProjectListContainer/ProjectListContainer.jsx";
import Proyectos from "./views/Proyectos.jsx";
import NavbarProjects from "./components/NavbarProjects/NavbarProjects.jsx";
import ProjectDetailContainer from "./components/Projects/ProjectDetailContainer/ProjectDetailContainer.js";

function App() {
  
  return (
    // <ApiContext>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<></>} />
    //     </Routes>
    //   </Router>
    // </ApiContext>
      <BrowserRouter>
        <Navbar/>
        <NavbarProjects/>
          <Routes>
            {/* <Route path="/login" element={<Login/>} /> */}
            {/* <Route path="/sigin" element={<Sigin/>} /> */}
            <Route path="*" element={<Navigate to ="/"/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/proyectos" element={<Proyectos/>} />
            <Route path="/proyectos/:categoryId" element={<Proyectos/>}/>
            {/* <Route path="/project" element={<ProjectDetailContainer/>}/> */}
            <Route path="/proyecto/:proyectoId" element={<ProjectDetailContainer/>}/>
            

            
              
          </Routes>
         
        <Footer/>
      </BrowserRouter>
  );
}



export default App;