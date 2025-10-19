import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Servicios from "./Servicios.jsx";
import Contacto from "./Contacto.jsx";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
