import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";
import { LoginProvider } from "./context/LoginContext.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {



  return (
    <ApiContext>
        <LoginProvider>
            <AppRouter/>
        </LoginProvider>
    </ApiContext>
  );
}



export default App;