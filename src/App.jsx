import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import Tiendas from "./pages/Tiendas";
import Contacto from "./pages/Contacto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Router>
      <div
        className={
          darkMode ? "dark bg-gray-800 text-white" : "bg-white text-gray-800"
        }
      >
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            {/* Aqui creamos las rutas*/}
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/" element={<Inicio darkMode={darkMode} />} />
            <Route path="/galeria" element={<Galeria darkMode={darkMode} />} />
            <Route path="/tiendas" element={<Tiendas darkMode={darkMode} />} />
            <Route
              path="/contacto"
              element={<Contacto darkMode={darkMode} />}
            />
            {/* <Route
              path="/starwars"
              element={<StarWars darkMode={darkMode} />}
            />
            <Route
              path="/harrypotter"
              element={<HarryPotter darkMode={darkMode} />}
            /> */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
