import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Links principales */}
      <nav className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/cafe-colon">Café Colón</Link>
        <Link href="/vereda-tropical">Vereda Tropical</Link>
        <Link href="/sal-pimienta">Sal&Pimienta</Link>
        <Link href="/atrium-bar">Atrium Bar</Link>
        <Link href="/kioto-sushi">Kioto Sushi</Link>
        <Link href="/contact">Contáctanos</Link>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Botón de ATRÁS (solo si no es la página de inicio) */}
        {!isHome && (
          <button
            onClick={() => router.back()}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded"
          >
            ← ATRÁS
          </button>
        )}

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/593999545551?text=Hola,%20necesito%20asistencia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-2 rounded"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
