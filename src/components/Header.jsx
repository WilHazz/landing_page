import { MenuIcon, Moon, ShoppingCart, SunMedium } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); //abre el buscardor en version mobile

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`py-4 px-4 ${
        darkMode ? "bg-gray-800  text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap gap-4">
        {/* Menú de navegación */}

        <div className="flex items-center space-x-6 text-white text-1xl">
          {/* Botón hamburguesa en Mobile */}
          <button
            className={`sm:hidden cursor-pointer ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon size={28} />
          </button>
          {/* Menú de navegación */}
          <nav className="hidden sm:flex space-x-6 text-white text-1xl">
            {[
              { to: "/", label: "Inicio" },
              { to: "/nuevo", label: "Nuevo" },
              { to: "/tiendas", label: "Tiendas" },
              { to: "/contacto", label: "Contacto" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => {
                  const baseColor = darkMode ? "text-white" : "text-gray-800";
                  const activeColor = isActive
                    ? "text-amber-500 font-bold"
                    : "";
                  return `${baseColor} ${activeColor} hover:text-amber-500 transition-colors duration-300`;
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Buscador */}
        <div className="flex items-center gap-4 flex-grow justify-center sm:justify-end">
          {/* Boton search para Desktop */}
          <div
            className={`hidden sm:flex items-center rounded-full px-4 py-1 w-64 ${
              darkMode ? "bg-white text-gray-800" : "bg-gray-100"
            }  `}
          >
            <input
              type="text"
              placeholder="Buscar.."
              className="flex-grow outline-none text-sm placeholder-gray-600"
            />
            <button className="btn-buscador text-white bg-orange-500 rounded-full p-1">
              🔍
            </button>
          </div>
          {/* boton lupa mobile */}
          <button
            className={`btn_mb sm:hidden text-white bg-orange-500 p-2 rounded-full ${
              darkMode ? "" : "text-white"
            }`}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            🔍
          </button>

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
          className="cursor-pointer p-2 rounded-full hover:bg-amber-500 transition-all"
        >
          {darkMode ? <Moon size={24} /> : <SunMedium size={24} />}
        </button>

        {/* Logo */}
        <div
          className={`logo text-sm ml-2 cursor-pointer hover:text-amber-500 ${darkMode} ? "text-white" : "text-gray-800"`}
        >
          <Link to="/">
            <span>Tu Ropa</span>
          </Link>
        </div>
      </div>

      {/* Input de búsqueda en mobile */}
      {searchOpen && (
        <div
          className={`sm:hidden px-4 py-2 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <input
            type="text"
            placeholder="Buscar..."
            className={`w-full p-2 rounded-full border ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                : "bg-gray-100 text-gray-800 border-gray-300 placeholder-gray-500"
            }`}
            // con onKeyDown hago que se cierre cuando tecleo enter
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchOpen(false);
              }
            }}
          />
        </div>
      )}

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div
          className={`sm:hidden flex flex-col items-center py-2${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"
          }`}
        >
          {[
            { to: "/", label: "Inicio" },
            { to: "/nuevo", label: "Nuevo" },
            { to: "/tiendas", label: "Tiendas" },
            { to: "/contacto", label: "Contacto" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)} // Para cerrar el menú al hacer clic
              className={({ isActive }) => {
                const base = darkMode ? "text-white" : "text-gray-800";
                const active = isActive ? "text-amber-500 font-bold" : "";
                return `py-2 ${base} ${active} hover:text-amber-500 transition-colors duration-300`;
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
