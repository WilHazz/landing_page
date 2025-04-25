import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-8 bg-gray-50"></main>
      <Footer />
    </>
  );
}
