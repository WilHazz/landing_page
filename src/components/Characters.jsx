// Este comoponente se crea para una seccion de personajes y colaboraciones como StarWars, harryPoter etc
import { Link } from "react-router-dom";

export default function Characters({ darkMode }) {
  const personajes = [
    {
      id: 1,
      nombre: "Star Wars",
      clase: "font-starwars",
      path: "/personajes/starwars",
    },
    {
      id: 2,
      nombre: "Dragon Ball Z",
      clase: "font-dragonBallZ",
      path: "/personajes/dragonballz",
    },
    {
      id: 3,
      nombre: "Harry Potter",
      clase: "font-harrypotter",
      path: "/personajes/harrypotter",
    },
    {
      id: 4,
      nombre: "Looney Tunes",
      clase: "font-LonneyTunes",
      path: "/personajes/lonneytunes",
    },
    {
      id: 5,
      nombre: "Rick and Morty",
      clase: "font-RickandMorty",
      path: "/personajes/rickandmorty",
    },
  ];

  return (
    <section
      className={`py-16 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-widest mb-10">
          PERSONAJES Y COLABORACIONES
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {personajes.map((p) => (
            <div key={p.id} className="flex flex-col items-center gap-2">
              <Link
                to={p.path}
                className={`flex flex-col justify-center items-center p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } hover:scale-105 transform min-h-[180px] w-full text-center`}
              >
                <h3
                  className={`text-xl mb-2 hover:text-amber-500 transition ${p.clase}`}
                >
                  {p.nombre}
                </h3>
              </Link>
              <Link
                to={p.path}
                className="text-sm font-semibold underline hover: text-orange-500"
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
