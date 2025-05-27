// Aqui vamos a contener las paginas Hero y character

import Characters from "../components/Characters";
import Hero from "../sections/Hero";
import Calzado from "../components/Calzado";

export const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Characters darkMode={darkMode} />
      <Calzado darkMode={darkMode} />
    </>
  );
};
