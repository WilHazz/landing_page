// Aqui vamos a contener las paginas Hero y character

import Characters from "../components/Characters";
import Hero from "../sections/Hero";
import Calzado from "../components/Calzado";
import Products from "../components/Products";
import Descuento from "../components/Descuento";

export const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Characters darkMode={darkMode} />
      <Calzado darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <Descuento darkMode={darkMode} />
    </>
  );
};
