import { Routes, Route } from "react-router-dom";
import Main from './pages/main'
import Repositorio from './pages/repositorio'
export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repositorio/:repositorio" element={<Repositorio/>}/>
    </Routes>
    
  );
}
