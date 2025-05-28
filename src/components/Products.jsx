import { Link } from "react-router-dom";

export default function Products({ darkMode }) {
  const productos = [
    {
      id: 1,
      nombre: "Zapatillas Urbanas",
      precio: "$ 70.000",
      imagen: "/images/products/Zapatilla1.jpg",
      link: "",
    },
    {
      id: 2,
      nombre: "Gorra Street",
      precio: "$ 70.000",
      imagen: "",
      link: "",
    },
    {
      id: 3,
      nombre: "Mochilla Deportiva",
      precio: "$ 70.000",
      imagen: "",
      link: "",
    },
    {
      id: 4,
      nombre: "Gorra Street",
      precio: "$ 70.000",
      imagen: "/images/products/Zapatilla1.jpg",
      link: "",
    },
    {
      id: 5,
      nombre: "Zapato Formal Mujer",
      precio: "$ 70.000",
      imagen: "",
      link: "",
    },
    {
      id: 6,
      nombre: "Zapato Formal Hombre",
      precio: "$ 70.000",
      imagen: "/images/products/Zapato-Formal.jpg",
      link: "",
    },
    {
      id: 7,
      nombre: "Relojes",
      precio: "$ 70.000",
      imagen: "/images/products/Zapato-Formal.jpg",
      link: "",
    },
    {
      id: 8,
      nombre: "Accesorios",
      precio: "$ 70.000",
      imagen: "/images/products/Zapato-Formal.jpg",
      link: "",
    },
  ];

  return (
    <section
      className={`transition-colors duration-500 py-10 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className={`relative w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              }`}
            >
              {/* Imagen */}
              <div className="relative w-full h-72">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-7xl h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold truncate">
                  {producto.nombre}
                </h3>
                <p className="text-md font-bold mt-1">{producto.precio}</p>
                {/* Botón centrado */}
                <Link
                  to={producto.link}
                  className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-amber-500 transition text-sm"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
