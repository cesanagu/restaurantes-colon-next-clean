import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  // Rutas donde debe mostrarse el botón
  const showOnRoutes = ["/contact", "/restaurantes/[id]"];

  // Si la ruta actual no está en la lista, no se muestra
  if (!showOnRoutes.includes(router.pathname)) {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 group flex items-center">
      <button
        onClick={() => router.push("/")}
        className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition flex items-center justify-center"
      >
        {/* Icono flecha */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Tooltip */}
      <span
        className="
          ml-2 text-sm font-medium bg-gray-900 text-white rounded-lg px-2 py-1 
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition
          whitespace-nowrap
        "
      >
        Volver al inicio
      </span>
    </div>
  );
}
