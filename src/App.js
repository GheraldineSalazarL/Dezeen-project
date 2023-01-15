import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sigin from "./components/Sigin/Sigin.jsx";
import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";

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
        <Routes>
          <Route path="/" element={<Sigin/>} />
          {/* <Route path="/" element={<Navbar/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;