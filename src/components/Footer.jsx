export default function Footer({ darkMode }) {
  return (
    <>
      <footer
        className={`border-t mt-8 transition-colors duration-300 ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
          ©{new Date().getFullYear()} NombreEmpres. Todos los derechos
          reservados.
        </div>
      </footer>
    </>
  );
}
