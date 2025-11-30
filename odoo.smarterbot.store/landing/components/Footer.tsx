export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10 mt-10 text-sm bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600">© {new Date().getFullYear()} SmarterOS Chile. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[color:var(--brand)]">Privacidad</a>
          <a href="#" className="hover:text-[color:var(--brand)]">Términos</a>
        </div>
      </div>
    </footer>
  );
}
