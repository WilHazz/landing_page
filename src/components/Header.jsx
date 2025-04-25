export default function Header() {
  return (
    <header className="bg-gray-800 py-4 px6">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">ROPA</h1>
        <nav className="space-x-4">
          <a href="" className="text-gray-600 hover:text-blue-500">
            Inicio
          </a>
          <a href="" className="text-gray-600 hover:text-blue-500">
            Producto
          </a>
          <a href="" className="text-gray-600 hover:text-blue-500">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
