import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Hero from "./sections/Hero";
import Characters from "./components/characters";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div
        className={
          darkMode ? "dark bg-gray-800 text-white" : "bg-white text-gray-800"
        }
      >
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          {/* Secciones de Hero, productos etc */}
          <Hero darkMode={darkMode} />
          <Characters darkMode={darkMode} />
        </Layout>
      </div>
    </>
  );
}

export default App;
