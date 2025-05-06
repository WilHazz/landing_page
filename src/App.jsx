import "./App.css";
import Layout from "./layout/Layout";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <div>
        <Layout>
          {/* Secciones de Hero, productos etc */}
          <Hero />
          {/* <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Bienvenido a nuestra tienda
            </h2>
          </div> */}
        </Layout>
      </div>
    </>
  );
}

export default App;
