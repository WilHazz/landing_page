const tiendas = [
  {
    nombre: "ARKADIA",
    ciudad: "Medellín, Antioquia",
    direccion: "Centro Comercial Arkadia, Local 0397",
    horario: "ABIERTO HASTA LAS 9 PM",
    imagen: "/images/Tiendas/Arkadia.jpg",
  },
  {
    nombre: "PARQUE FLORIDA",
    ciudad: "Medellín, Antioquia",
    direccion: "Transversal 78 #65 -299 351",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/images/Tiendas/ParqueFlorida.jpg",
  },
  {
    nombre: "BELLO",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/images/Tiendas/Bello.jpg",
  },
  {
    nombre: "ARCANGEL",
    ciudad: "Medellín, Antioquia",
    direccion: "Carrera 50 # 38 A -261 Parque Fabricato",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/images/Tiendas/Arcangel.jpg",
  },
  {
    nombre: "Marcus",
    ciudad: "Medellín, Antioquia",
    direccion: "Parque Las Alfombras Carrera 50",
    horario: "ABIERTO HASTA LAS 8 PM",
    imagen: "/images/Tiendas/Arcangel.jpg",
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
                className={`rounded-lg shadow-md flex w-full max-w-[700px] h-[200px] cursor-pointer overflow-hidden ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <img
                  src={tienda.imagen}
                  alt={tienda.nombre}
                  className="w-1/2 h-full object-cover"
                />
                <div className="p-4 w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{tienda.nombre}</h3>
                    <p className="">{tienda.ciudad}</p>
                    <p className="">{tienda.direccion}</p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block border border-amber-500 text-amber-600 text-sm px-3 py-1 rounded">
                      {tienda.horario}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
