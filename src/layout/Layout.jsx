import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="min-h-screen">{children}</main>
      <Footer darkMode={darkMode} />
    </>
  );
}
