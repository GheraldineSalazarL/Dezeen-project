import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sigin from "./components/Sigin/Sigin.jsx";
import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";
import Home from "./views/Home.jsx";

function App() {
  
  return (
    // <ApiContext>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<></>} />
    //     </Routes>
    //   </Router>
    // </ApiContext>
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Login/>} /> */}
            {/* <Route path="/" element={<Sigin/>} /> */}
            <Route path="/" element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;