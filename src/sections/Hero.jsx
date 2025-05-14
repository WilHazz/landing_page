import React from "react";
import { Twitter, Facebook, Instagram, PhoneCall } from "lucide-react";
import useScrollDirection from "../Hooks/useScrollDirection";

export default function Hero({ darkMode }) {
  const isCrollingUp = useScrollDirection();

  return (
    <>
      <section
        className={`py-16 px-6 md:px-12 transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texto */}
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="block">NEW</span>
              <span className="font-['Maxigo'] text-9xl block text-orange-500 italic">
                Fashion
              </span>
              <span className="block">SALE</span>
            </h1>
            <h2 className="text-lg font-semibold mt-6 uppercase">
              Landing Page
            </h2>
            <p
              className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              iste distinctio perferendis dolores temporibus qui cum beatae
              suscipit, enim eaque!
            </p>
            {/* Botones */}
            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition cursor-pointer">
                Sign Up
              </button>
              <button
                className={`border px-6 py-2 rounded transition cursor-pointer ${
                  darkMode
                    ? "border-gray-300 text-white hover:bg-gray-700"
                    : "border-gray-700 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Login
              </button>
            </div>
          </div>
          {/* Imgaen Circular */}
          <div className="relative">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-orange-500 p-2 relative">
              <img
                src="/images/img2.jpg"
                alt="Moda"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Redes sociales flotantes */}
        <div
          className={`hidden md:block transition-all duration-500 ease-in-out ${
            isCrollingUp ? "opacity-100" : "opacity-0 translate-y-4"
          } fixed right-4 top-1/2 transform -translate-y-1/2 z-50`}
        >
          <div
            className={`rounded-2xl shadow-md p-3 flex flex-col items-center space-y-4 ${
              darkMode ? "bg-white" : "bg-gray-800"
            }`}
          >
            <a
              href="#"
              className={` hover:text-orange-500 transition ${
                darkMode ? "text-gray-700" : "text-white"
              }`}
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className={` hover:text-orange-500 transition ${
                darkMode ? "text-gray-700" : "text-white"
              }`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className={` hover:text-orange-500 transition ${
                darkMode ? "text-gray-700" : "text-white"
              }`}
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className={` hover:text-orange-500 transition ${
                darkMode ? "text-gray-700" : "text-white"
              }`}
            >
              <PhoneCall size={20} />
            </a>
          </div>
        </div>
        {/* Mobile ( botones Horizontal) */}
        <div className="md:hidden mt-8 flex justify-center">
          <div
            className={`px-4 py-2 rounded-2xl shadow-md flex items-center space-x-4 ${
              darkMode ? "bg-white" : "bg-gray-800 "
            }`}
          >
            <a
              href="#"
              className={`hover:text-orange-500 transition p-2 rounded-full shadow ${
                darkMode ? "bg-white  text-gray-700" : "bg-gray-800 text-white"
              }`}
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className={`hover:text-orange-500 transition p-2 rounded-full shadow ${
                darkMode ? "bg-white  text-gray-700" : "bg-gray-800 text-white"
              }`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className={`hover:text-orange-500 transition p-2 rounded-full shadow ${
                darkMode ? "bg-white  text-gray-700" : "bg-gray-800 text-white"
              }`}
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className={`hover:text-orange-500 transition p-2 rounded-full shadow ${
                darkMode ? "bg-white  text-gray-700" : "bg-gray-800 text-white"
              }`}
            >
              <PhoneCall size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
