import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/FreehandPage.module.css";

export default function CafeColon() {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.fadeInItem}`);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.3 }
    );
    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <div
        className={styles.hero}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop')",
        }}
      >
        <h1>Café Colón</h1>
      </div>

      {/* Bloques intercalados */}
      <section className="space-y-16 max-w-5xl mx-auto py-12 px-4">
        {/* Bloque 1: Texto izquierda - Imagen derecha */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Gastronomía Internacional</h2>
            <p className="mb-4">
              Café Colón ofrece un espacio elegante para disfrutar de buffets
              internacionales, desayunos completos y cenas temáticas. Su
              ambiente cálido y atención personalizada lo hacen el lugar ideal
              para cada comida.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1176&auto=format&fit=crop"
              alt="Buffet internacional"
              className="rounded-lg shadow-lg fadeInItem"
            />
          </div>
        </div>

        {/* Bloque 2: Imagen izquierda - Texto derecha */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 md:flex-row-reverse">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Sabores del Mundo</h2>
            <p className="mb-4">
              Cada plato combina ingredientes frescos y locales, fusionando
              tradición e innovación. Desayunos, almuerzos y cenas temáticas que
              te transportan por sabores de todo el mundo.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1564758866817-6e2ec0e59811?q=80&w=1176&auto=format&fit=crop"
              alt="Desayuno completo"
              className="rounded-lg shadow-lg fadeInItem"
            />
          </div>
        </div>

        {/* Bloque 3: Texto izquierda - Imagen derecha */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Ambiente Acogedor</h2>
            <p className="mb-4">
              Ideal para reuniones de negocio, familias o momentos especiales,
              Café Colón garantiza una experiencia culinaria inolvidable en un
              entorno acogedor y moderno.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1176&auto=format&fit=crop"
              alt="Cena temática"
              className="rounded-lg shadow-lg fadeInItem"
            />
          </div>
        </div>
      </section>

<p className="fadeInItem">Prueba de despliegue Vercel</p>

    </Layout>
  );
}
