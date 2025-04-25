import { ShoppingBag, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 px6">
      <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap gap-4">
        {/* Menú de navegación */}
        <nav className="flex flex-wrap space-x-6 text-white text-1xl">
          <a href="#home" className=" hover:text-amber-300">
            Home
          </a>
          <a href="#gallery" className="  hover:text-amber-300">
            Gellery
          </a>
          <a href="#shop" className=" hover:text-amber-300">
            Shop
          </a>
          <a href="#contact" className=" hover:text-amber-300">
            Contact
          </a>
        </nav>

        {/* Buscador */}
        <div className="flex items-center gap-4 flex-grow justify-center sm:justify-end">
          <div className="hidden sm:flex items-center bg-white rounded-full px-4 py-1 w-64">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow outline-none text-sm placeholder-gray-600"
            />
            <button className="btn-buscador text-white bg-orange-500 rounded-full p-1">
              🔍
            </button>
          </div>

          {/* Carrito de comparas */}
          <div className="text-white relative cursor-pointer hover:text-amber-300">
            <ShoppingCart size={24} />
            {/* Contador (opcional) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
              2
            </span>
          </div>
        </div>

        {/* Logo */}
        <div className="text-white text-sm ml-2">
          <span>Logo</span>
        </div>
      </div>
    </header>
  );
}
