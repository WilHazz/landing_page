import { useState } from "react";

const productoModa = [
  {
    id: 1,
    nombre: "Camiseta Oversize Mujer",
    genero: "Mujer",
    categoria: "Camisetas",
    imagen: "/images/moda/Camiseta-Oversize.jpg",
    precioAntes: "$ 89,000",
    precioActual: "$ 69,000",
  },
];

const categorias = ["Camisas", "Camisetas", "Buzos", "Polos", "Chaquetas"];
const generos = ["Mujer", "Hombre"];
const talla = ["M", "S", "L", "XL"];
const Manga = ["Larga", "Corta"];

export default function Nuevo({ darkMode }) {
  const [filtroCategoria, setFiltroCategoria] = useState([]);
  const [filtroGenero, setFiltroGenero] = useState([]);
  const [filtroTalla, setFiltroTalla] = useState([]);
  const [filtroManga, setFiltroManga] = useState([]);

  const [openFiltros, setOpenFiltros] = useState({
    categoria: false,
    genero: false,
    talla: false,
    manga: false,
  });

  const toggleFiltro = (nombre) => {
    setOpenFiltros((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  return (
    <section
      className={`py-8 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center my-10">Ropa de Moda</h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filtros */}
        <aside className="space-y-6 md:col-span-1">
          {/* Categorias */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFiltro("categoria")}
            >
              <h3 className="font-bold">Categoría</h3>
              <span>{openFiltros.categoria ? "-" : "+"}</span>
            </div>
            {openFiltros.categoria && (
              <div className="mt-2 spaace-y-1">
                {categorias.map((cat) => (
                  <label key={cat} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Por Genero */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFiltro("genero")}
            >
              <h3 className="font-bold">Género</h3>
              <span>{openFiltros.genero ? "-" : "+"}</span>
            </div>
            {openFiltros.genero && (
              <div className="mt-2 space-y-1">
                {generos.map((gen) => (
                  <label key={gen} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {gen}
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
