export default function Footer() {
  return (
    <>
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          ©{new Date().getFullYear()} NombreEmpres. Todos los derechos
          reservados.
        </div>
      </footer>
    </>
  );
}
