import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";

function App() {
  
  return (
    <div className="mobile-div">
      <ApiContext>
        <Router>
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </Router>
      </ApiContext>
    </div>
  );
}

export default App;