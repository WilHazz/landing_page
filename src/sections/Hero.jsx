import React from "react";
import { Twitter, Facebook, Instagram, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="bg-[#1f2a37] text-white py-16 px-6 md:px-12">
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
            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              iste distinctio perferendis dolores temporibus qui cum beatae
              suscipit, enim eaque!
            </p>
            {/* Botones */}
            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition cursor-pointer">
                Sign Up
              </button>
              <button className="border border-gray-300 text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer">
                Login
              </button>
            </div>
          </div>
          {/* Imgaen Circular */}
          <div className="relative">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-orange-500 p-2 relative">
              <img
                src="/images/images.jpg"
                alt="Moda"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Redes sociales flotantes */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center space-y-4">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              <PhoneCall size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
