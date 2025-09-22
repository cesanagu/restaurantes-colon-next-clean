export default function Contact() {
  return (
    <main className="bg-white text-gray-900">
      {/* Encabezado */}
      <section className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1506748686218-6a4e4b6f8d8b?q=80&w=1176&auto=format&fit=crop"
          alt="Contáctanos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl text-white font-bold">Contáctanos</h1>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Estamos aquí para ayudarte</h2>
          <p className="text-lg leading-relaxed mb-6">
            Si tienes alguna pregunta, inquietud o deseas realizar una reserva, no dudes en ponerte en contacto con nosotros. Nuestro equipo está listo para asistirte.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Dirección: Av. Amazonas N19-14 y Av. Patria, Quito, Ecuador
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Teléfono: (+593) 2 3828322
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Horarios: Lunes a Domingo, 8:00 AM - 3:00 PM
          </p>
          <a
            href="https://wa.me/593999545551?text=Hola,%20necesito%20asistencia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
          >
            Reserva vía WhatsApp
          </a>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="py-12 px-6 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">Envíanos un mensaje</h3>
          <form
            action="https://formsubmit.co/tu-correo@ejemplo.com"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

