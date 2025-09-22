import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/ParallaxPage.module.css";

export default function VeredaTropical() {
  useEffect(() => {
    const images = document.querySelectorAll(`.${styles.parallaxImage}`);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.3 }
    );
    images.forEach(img => observer.observe(img));
  }, []);

  return (
    <Layout>
      <div className={styles.hero} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')" }}>
        <h1>Vereda Tropical</h1>
      </div>

      <section className={styles.contentSection}>
        <h2>Sabores Tropicales</h2>
        <p>
          En Vereda Tropical disfrutarás de un ambiente relajado y fresco con platos inspirados en la cocina ecuatoriana y tropical. Frutas frescas, cocteles refrescantes y un espacio ideal para compartir con amigos y familia.
        </p>
        <p>
          Cada plato se prepara con ingredientes locales y recetas auténticas, creando un balance perfecto entre tradición y modernidad. Nuestra barra de cocteles ofrece bebidas refrescantes y tropicales que acompañan cada comida.
        </p>
        <p>
          Ideal para almuerzos, cenas o momentos casuales, Vereda Tropical combina sabor, frescura y un ambiente acogedor que invita a relajarse y disfrutar.
        </p>

        <div className={styles.parallaxContainer}>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80" alt="Platos tropicales"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Cocteles frescos"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1565958011702-44b2c15ef2e0?auto=format&fit=crop&w=800&q=80" alt="Ambiente relajado"/>
        </div>
      </section>
    </Layout>
  );
}
