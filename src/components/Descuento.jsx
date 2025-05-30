import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const productosDesc = [
  {
    id: 1,
    nombre: "Camisa Oversize",
    tipo: "Superior",
    imagen: "/images/discount/Camisa-Oversize.jpg",
  },
  {
    id: 2,
    nombre: "Pantalón Jogger",
    tipo: "Inferior",
    imagen: "/images/discount/pantalon-Jogger.jpg",
  },
  {
    id: 3,
    nombre: "Short Deportivo",
    tipo: "Inferior",
    imagen: "/images/discount/Short-Deportivo.jpg",
  },
  {
    id: 4,
    nombre: "Chaqueta de Cuero",
    tipo: "Superior",
    imagen: "/images/discount/Chaqueta-Cuero.jpg",
  },
  {
    id: 5,
    nombre: "Pantalon Formal para Mujer",
    tipo: "Superior",
    imagen: "/images/discount/pantalon-mujer.jpg",
  },
  {
    id: 6,
    nombre: "Pantalon Hombre",
    tipo: "Inferior",
    imagen: "/images/discount/Pantalon-hombre.jpg",
  },
  {
    id: 7,
    nombre: "Camisa para Mujer",
    tipo: "Superior",
    imagen: "/images/discount/Camisa-mujer.jpg",
  },
  {
    id: 8,
    nombre: "Pantalon Formal Hombre",
    tipo: "Inferior",
    imagen: "/images/discount/pantalon-formal-hombre.jpg",
  },
  {
    id: 9,
    nombre: "Camisa Formal para Hombre",
    tipo: "Superior",
    imagen: "/images/discount/Camisa-hombre-formal.jpg",
  },
  {
    id: 10,
    nombre: "Camisa para entrenar Hombre",
    tipo: "Superior",
    imagen: "/images/discount/Camisa-Gym-Hombre.jpg",
  },
  {
    id: 11,
    nombre: "Short Deportivo",
    tipo: "Inferior",
    imagen: "/images/discount/Short-Deportivo2.jpg",
  },
  {
    id: 12,
    nombre: "Short de Jean para Mujer",
    tipo: "Inferior",
    imagen: "/images/discount/short-jean-para-mujer.jpg",
  },
];

export default function Descuento({ darkMode }) {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 5;

  const handleNext = () => {
    if (startIndex + visibleCount >= productosDesc.length) {
      setStartIndex(0); // sirve para reiniciar desde el principio
    } else {
      setStartIndex(startIndex + 1);
    }

    // setStartIndex((prev) => (prev + 1) % productosDesc.length);
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      setStartIndex(Math.max(productosDesc.length - visibleCount, 0));
    } else {
      setStartIndex(startIndex - 1);
    }
    // setStartIndex((prev) => (prev === 0 ? productosDesc.length - 1 : prev - 1));
  };

  const getTallas = (tipo) => {
    if (tipo === "Superior") return ["S", "M", "L", "XL"];
    return ["04", "06", "08", "10", "14"];
  };

  return (
    <section
      className={`py-10 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Productos en Descuento
        </h2>

        <div className="relative">
          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-amber-600"
          >
            <ChevronLeft className="cursor-pointer" />
          </button>

          <div className="cursor-pointer flex overflow-hidden gap-4">
            {productosDesc.slice(startIndex, startIndex + 5).map((prod) => (
              <div
                key={prod.id}
                className="relative w-[300px] flex-shrink-0 group"
              >
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  className="w-full h-[400px] object-cover rounded-lg shadow"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  -50%
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pointer-events-none">
                  <div className="w-full px-4 pb-4 pointer-events-auto max-w-[200px]">
                    <details className="w-full text-center">
                      <summary
                        className={`cursor-pointer hover:bg-amber-500 w-full px-3 py-1 rounded-t-full font-semibold ${
                          darkMode
                            ? "bg-white text-black"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        Seleccionar talla
                      </summary>
                      <div className="mt-2 flex flex-wrap justify-center gap-2">
                        {getTallas(prod.tipo).map((talla, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-black px-2 py-1 rounded text-sm shadow cursor-pointer hover:bg-amber-500"
                          >
                            {talla}
                          </span>
                        ))}
                      </div>
                    </details>
                    <button
                      className={`px-4 py-1 rounded-b-full font-semibold hover:bg-amber-500 transition w-full mt-[-2px] cursor-pointer ${
                        darkMode
                          ? "bg-white text-black"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      Añadir
                    </button>
                  </div>
                </div>

                <p className="mt-2 text-center font-semibold">{prod.nombre}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-amber-600"
          >
            <ChevronRight className="cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
}
