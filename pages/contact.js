// pages/contacto.js
import Layout from "../components/Layout";

export default function Contacto() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
        <form
          action="https://formspree.io/f/xpwyabro"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
}
