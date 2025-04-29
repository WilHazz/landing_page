import { MenuIcon, Moon, ShoppingCart, SunMedium } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // true = oscuro

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`py-4 px6 ${
        darkMode ? "bg-gray-800  text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap gap-4">
        {/* Menú de navegación */}

        <div className="flex items-center space-x-6 text-white text-1xl">
          {/* Botón hamburguesa en Mobile */}
          <button
            className="sm:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon size={28} />
          </button>
          {/* Menú de navegación */}
          <nav className="hidden sm:flex space-x-6 text-white text-1xl">
            <a
              href="#home"
              className={`hover:text-amber-500 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Inicio
            </a>
            <a
              href="#gallery"
              className={`hover:text-amber-500 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Galería
            </a>
            <a
              href="#shop"
              className={`hover:text-amber-500 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Tiendas
            </a>
            <a
              href="#contact"
              className={`hover:text-amber-500 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Contacto
            </a>
          </nav>
        </div>

        {/* Buscador */}
        <div className="flex items-center gap-4 flex-grow justify-center sm:justify-end">
          <div
            className={`hidden sm:flex items-center rounded-full px-4 py-1 w-64 ${
              darkMode ? "bg-white" : "bg-gray-100"
            }  `}
          >
            <input
              type="text"
              placeholder="Search"
              className="flex-grow outline-none text-sm placeholder-gray-600"
            />
            <button className="btn-buscador text-white bg-orange-500 rounded-full p-1">
              🔍
            </button>
          </div>

          {/* Carrito de comparas */}
          <div
            className={`relative cursor-pointer hover:text-amber-500 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <ShoppingCart size={24} />
            {/* Contador (opcional) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
              2
            </span>
          </div>
        </div>

        {/* Boton para cambiar modo Dark/White */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-700 transition-all"
        >
          {darkMode ? <SunMedium size={24} /> : <Moon siza={24} />}
        </button>

        {/* Logo */}
        <div
          className={`logo text-sm ml-2 cursor-pointer hover:text-amber-400 ${darkMode} ? "text-white" : "text-gray-800"`}
        >
          <span>Tu Ropa</span>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="menuMobile sm:hidden flex flex-col items-center bg-gray-800 py-2 text-white">
          <a href="#home" className="py-2 hover:text-amber-300">
            Inicio
          </a>
          <a href="#gallery" className="py-2 hover:text-amber-300">
            Galería
          </a>
          <a href="#shop" className="py-2 hover:text-amber-300">
            Tiendas
          </a>
          <a href="#contact" className="py-2 hover:text-amber-300">
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
