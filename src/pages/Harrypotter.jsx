import { useState } from "react";

const productsHP = [
  {
    id: 1,
    nombre: "Camiseta Gryffindor",
    genero: "Hombre",
    imagen: "/images/Product_harrp/camiseta-gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tipo: "Superior",
  },
  {
    id: 2,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harrp/camiseta-gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tipo: "Superior",
  },
  {
    id: 3,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harrp/camiseta-gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tipo: "Superior",
  },
  {
    id: 4,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harrp/camiseta-gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tipo: "Superior",
  },
  {
    id: 5,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harrp/camiseta-gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tipo: "Superior",
  },
  {
    id: 6,
    nombre: "Camiseta Hogwarts Mujer",
    genero: "Mujer",
    imagen: "/images/Product_harrp/camiseta-gryffindor.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
    tipo: "Superior",
  },
];

const tallas = ["XS", "S", "M", "L", "XL"];

export default function Harrypotter({ darkMode }) {
  const [filtroGenero, setFiltroGenero] = useState("");
  const [showTalla, setShowTalla] = useState({});

  const productosFiltados = productsHP.filter(
    (p) => !filtroGenero || p.genero === filtroGenero
  );

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
                  className={`px-2 py-1 rounded border text-sm cursor-pointer hover:bg-amber-500 ${
                    darkMode ? "border-white" : "border-gray-800"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Productos */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltados.map((prod) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
