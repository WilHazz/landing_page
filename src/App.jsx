import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Nuevo from "./pages/Nuevo";
import Tiendas from "./pages/Tiendas";
import Contacto from "./pages/Contacto";
import Starwars from "./pages/Starwars";
import Dragonballz from "./pages/Dragonballz";
import Harrypotter from "./pages/Harrypotter";
import Lonneytunes from "./pages/Lonneytunes";
import Rickandmorty from "./pages/Rickandmorty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  //Usar el LocalStorage para darkMode y terner persistencia al cambio de Dark y Luz
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div
        className={
          darkMode ? "dark bg-gray-800 text-white" : "bg-white text-gray-800"
        }
      >
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            {/* Aqui creamos las rutas*/}
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/nuevo" element={<Nuevo darkMode={darkMode} />} />
            <Route path="/tiendas" element={<Tiendas darkMode={darkMode} />} />
            <Route
              path="/contacto"
              element={<Contacto darkMode={darkMode} />}
            />
            {/* Ruta de personajes y colaboraciones */}
            <Route
              path="/personajes/starwars"
              element={<Starwars darkMode={darkMode} />}
            />
            <Route
              path="/personajes/dragonballz"
              element={<Dragonballz darkMode={darkMode} />}
            />
            <Route
              path="/personajes/harrypotter"
              element={<Harrypotter darkMode={darkMode} />}
            />
            <Route
              path="/personajes/lonneytunes"
              element={<Lonneytunes darkMode={darkMode} />}
            />
            <Route
              path="/personajes/rickandmorty"
              element={<Rickandmorty darkMode={darkMode} />}
            />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
