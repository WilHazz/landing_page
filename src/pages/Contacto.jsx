export default function Contacto({ darkMode }) {
  return (
    <>
      <section
        className={`py-10 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1 className="text-4xl font-bold text-center my-10">CONTÁCTANOS</h1>
        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-1xl font-semibold uppercase mb-2"
                htmlFor=""
              >
                Nombre
              </label>
              <input
                type="text"
                className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:right-2 focus:ring-black ${
                  darkMode ? "focus:ring-white" : "border-gray-600"
                }`}
                placeholder="Ingrese su Nombre"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-1xl font-semibold uppercase mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:right-2 focus:ring-black ${
                  darkMode ? "focus:ring-white" : "border-gray-600"
                }`}
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-1xl font-semibold uppercase mb-2"
            >
              Mensaje
            </label>
            <textarea
              rows={5}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                darkMode ? "focus:ring-white" : "border-gray-600"
              }`}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`px-6 py-2 rounded hover:opacity-90 transition cursor-pointer ${
                darkMode ? "bg-amber-600" : "bg-amber-500"
              }`}
            >
              ENVIAR
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
