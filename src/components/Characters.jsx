// Este comoponente se crea para una seccion de personajes y colaboraciones como StarWars, harryPoter etc

export default function Characters({ darkMode }) {
  const personajes = [
    { id: 1, nombre: "Star Wars", clase: "font-starwars", path: "/starwars" },
    { id: 2, nombre: "Dragon Ball Z", clase: "font-dragonBallZ" },
    { id: 3, nombre: "Harry Potter", clase: "font-harrypotter" },
    { id: 4, nombre: "Looney Tunes", clase: "font-LonneyTunes" },
    { id: 5, nombre: "Rick and Morty", clase: "font-RickandMorty" },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-6">
            {personajes.map((p) => (
              <div
                key={p.id}
                className={`flex flex-col items-center p-4 rounded-lg shadow hover:shadow-md transition ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <a
                  href={`/personajes/${p.nombre
                    .toLowerCase()
                    .replaceAll("", "")}`}
                >
                  <h3
                    className={`text-xl mb-8 cursor-pointer hover:text-amber-500 hover:scale-105 transform transition ${p.clase}`}
                  >
                    {p.nombre}
                  </h3>
                </a>
                <a
                  href={`/personajes/${p.nombre
                    .toLowerCase()
                    .replaceAll(" ", "")}`}
                  className="text-sm font-semibold underline hover:text-orange-500"
                >
                  Ver más
                </a>
              </div>
            ))}
          </div>
        </h2>
      </div>
    </section>
  );
}
