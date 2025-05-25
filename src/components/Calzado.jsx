import tenisGeneral from "/images/Tenis1.png";
import tenisMujer from "/images/TenisMujer.png";
import tenisHombre from "/images/TenisHombre.png";

import { Link } from "react-router-dom";

export default function Calzado({ darkMode }) {
  const calzados = [
    {
      id: 1,
      titulo: "TENIS",
      img: tenisGeneral,
      link: "/calzado/tenis",
    },
    {
      id: 2,
      titulo: "TENIS MUJER",
      img: tenisMujer,
      link: "/calzado/tenis-mujer",
    },
    {
      id: 3,
      titulo: "TENIS HOMBRE",
      img: tenisHombre,
      link: "/calzado/tenis-hombre",
    },
  ];

  return (
    <section
      className={`w-full transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
        {calzados.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="relative group w-full h-[500px] overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.titulo}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            {/* Texto lateral rotado */}
            <div className="absolute top-4 left-4 md:top-1/2 md:-translate-y-1/2 md:left-4 rotate-0 md:-rotate-90 origin-left px-3 py-1 text-black font-extrabold shadow text-xl">
              {item.titulo}
            </div>
            {/* Botón */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-500 transition">
                Ver más
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
