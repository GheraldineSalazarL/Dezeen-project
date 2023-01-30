import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";

import { LoginProvider } from "./context/LoginContext.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {



  return (
    // <ApiContext>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<></>} />
    //     </Routes>
    //   </Router>
    // </ApiContext>

    <LoginProvider>
        <AppRouter/>
    </LoginProvider>
  );
}



export default App;