const tiendas = [
  {
    nombre: "ARKADIA",
    ciudad: "Medellín, Antioquia",
    direccion: "Centro Comercial Arkadia, Carrera 70 # 1-141 Local 0397",
    horario: "ABIERTO HASTA LAS 9 PM",
    imagen: "/images/Tiendas/ArkadiaPort.png",
  },
  {
    nombre: "PARQUE FLORIDA",
    ciudad: "Medellín, Antioquia",
    direccion: "Transversal 78 #65 -299 351",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/images/Tiendas/",
  },
  {
    nombre: "BELLO",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/images/Tiendas/bello.jpg",
  },
  {
    nombre: "ARCANGEL",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/ruta/bello.jpg",
  },
  {
    nombre: "PARQUE LAS ALFOMBRAS",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/ruta/bello.jpg",
  },
  {
    nombre: "BELLO",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/ruta/bello.jpg",
  },
  {
    nombre: "BELLO",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/ruta/bello.jpg",
  },
  {
    nombre: "BELLO",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/ruta/bello.jpg",
  },
  {
    nombre: "BELLO",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/ruta/bello.jpg",
  },
];

export default function Tiendas({ darkMode }) {
  return (
    <>
      <section
        className={`py-10 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center my-10">TIENDAS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tiendas.map((tienda, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md flex cursor-pointer overflow-hidden"
              >
                <img
                  src={tienda.imagen}
                  alt={tienda.nombre}
                  className="w-1/2 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
