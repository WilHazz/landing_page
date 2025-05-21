// Aqui vamos a contener las paginas Hero y character

import Characters from "../components/characters";
import Hero from "../sections/Hero";

export const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Characters darkMode={darkMode} />
    </>
  );
};
