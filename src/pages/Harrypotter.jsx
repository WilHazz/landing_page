import { useState } from "react";

const productsHP = [
  {
    id: 1,
    nombre: "Camiseta Gryffindor",
    genero: "Hombre",
    imagen: "/images/Product_harryP/Camiseta-Gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["S", "M", "L"],
  },
  {
    id: 2,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harryP/Camisa-Hogwarts.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["S", "M", "L"],
  },
  {
    id: 3,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Hombre",
    imagen: "/images/Product_harryP/Camiseta-Gryffindor-2.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["S", "M", "L"],
  },
  {
    id: 4,
    nombre: "Chaqueta Gryffindor",
    genero: "Hombre",
    imagen: "/images/Product_harryP/Chaqueta-Gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["S", "M", "L"],
  },
  {
    id: 5,
    nombre: "Camiseta Slytherin Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harryP/Camiseta-Slytherin-1.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["S", "M"],
  },
  {
    id: 6,
    nombre: "Chaqueta Slytherin",
    genero: "Mujer",
    imagen: "/images/Product_harryP/Camiseta-Slytherin.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["XS", "M", "XL"],
  },
  {
    id: 7,
    nombre: "Camiseta Hogwarts",
    genero: "Mujer",
    imagen: "/images/Product_harryP/Camisa-Hogwarts-1.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["M", "S", "L"],
  },
  {
    id: 8,
    nombre: "Buzo Slytherin",
    // genero: "Mujer",
    imagen: "/images/Product_harryP/Buzo-SlyTherin.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["M", "S", "L"],
  },
  {
    id: 9,
    nombre: "Camiseta Ravenclaw",
    genero: "Hombre",
    imagen: "/images/Product_harryP/Camiseta-Ravenclaw.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tallasDisponibles: ["M", "L", "XL"],
  },
];

const tallas = ["XS", "S", "M", "L", "XL"];

export default function Harrypotter({ darkMode }) {
  const [filtroGenero, setFiltroGenero] = useState("");
  const [showTalla, setShowTalla] = useState({});
  const [setselectedTallas, setSetselectedTallas] = useState({});
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");

  const productosFiltrados = productsHP.filter((producto) => {
    if (filtroGenero && producto.genero !== filtroGenero) return false;
    if (
      tallaSeleccionada &&
      !producto.tallasDisponibles.includes(tallaSeleccionada)
    )
      return false;
    return true;
  });

  const handleSeleccionarTalla = (id, talla) => {
    setSetselectedTallas((prev) => ({
      ...prev,
      [id]: talla,
    }));
  };

  const handleSeleccionarFiltroTalla = (talla) => {
    setTallaSeleccionada((prev) => (prev === talla ? "" : talla));
  };

  return (
    <section
      className={`py-2 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Banner */}
      <div>
        <img
          src="/images/Product_harryP/Banner_HarryPotter.PNG"
          alt="Banner Harry Potter"
          className="w-full h-auto max-h-[400px] object-cover"
        />
      </div>
      <h2 className="text-3xl py-2 text-center font-bold mb-6">
        Colección Harry Potter
      </h2>
      <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filtros */}
        <aside className="md:col-span-1 space-y-6">
          <div className="">
            <h3 className="font-bold mb-2">Categorías</h3>
            <label htmlFor="" className="block">
              <input
                type="radio"
                name="genero"
                onChange={() => setFiltroGenero("")}
              />
              <span className="ml-2">Todos</span>
            </label>
            <label className="block">
              <input
                type="radio"
                name="genero"
                onChange={() => setFiltroGenero("Mujer")}
              />
              <span className="ml-2">Mujer</span>
            </label>
            <label className="block">
              <input
                type="radio"
                name="genero"
                onChange={() => setFiltroGenero("Hombre")}
              />
              <span className="ml-2">Hombre</span>
            </label>
          </div>
          <div>
            <h3 className="font-bold mb-2">Talla</h3>
            <div className="flex flex-wrap gap-2">
              {tallas.map((t) => (
                <span
                  key={t}
                  onClick={() => handleSeleccionarFiltroTalla(t)}
                  className={`px-3 py-1 rounded text-sm cursor-pointer transition-transform transform duration-200 border shadow
                  ${
                    tallaSeleccionada === t
                      ? "bg-amber-500 scale-110 text-white border-amber-500"
                      : darkMode
                      ? "bg-transparent text-white border-white hover:bg-amber-500"
                      : "bg-transparent text-gray-800 border-gray-800 hover:bg-amber-500"
                  }
                `}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Productos */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((prod) => (
            <div
              key={prod.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="w-full h-[300px] object-cover rounded-md"
              />
              <h3>{prod.nombre}</h3>
              <div className="text-center mt-1">
                <span className="line-through text-sm text-gray-400">
                  {prod.precioAntes}
                </span>
                <span className="ml-2 font-bold text-red-500">
                  {prod.precioActual}
                </span>
              </div>
              {/* Botones */}
              <div className="mt-4 text-center">
                <button
                  onClick={() =>
                    setShowTalla((prev) => ({
                      ...prev,
                      [prod.id]: !prev[prod.id],
                    }))
                  }
                  className={`w-full px-4 py-2 rounded font-semibold transition cursor-pointer hover:bg-amber-500 ${
                    darkMode ? "bg-white text-black" : "bg-gray-800 text-white"
                  }`}
                >
                  Seleccionar Talla
                </button>
                {showTalla[prod.id] && (
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {tallas.map((talla, idx) => (
                      <span
                        key={idx}
                        onClick={() => handleSeleccionarTalla(prod.id, talla)}
                        className={`px-3 py-1 rounded text-sm cursor-pointer transition-transform transform duration-200 border shadow hover:bg-amber-500
                           ${
                             setselectedTallas[prod.id] === talla
                               ? "bg-amber-500 scale-110 text-white border-amber-500"
                               : darkMode
                               ? "bg-transparent text-white border-white"
                               : "bg-transparent text-gray-800 border-gray-800"
                           }}`}
                      >
                        {talla}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  className={`mt-2 w-full px-4 py-2 rounded font-semibold cursor-pointer hover:bg-amber-500 ${
                    darkMode ? "bg-white text-black" : "bg-gray-800 text-white"
                  }`}
                >
                  Añadir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
