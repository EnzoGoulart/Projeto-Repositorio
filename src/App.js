import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import {GS} from './style/GS'

function App() {
  return (
      <>
        <GS/>
        <BrowserRouter>
            <ToastContainer autoClose={3000}/>
            <RoutesApp />
        </BrowserRouter>
      </>
  );
}

export default App;
