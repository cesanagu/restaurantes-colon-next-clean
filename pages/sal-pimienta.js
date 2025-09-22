import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/ParallaxPage.module.css";

export default function SalPimienta() {
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
      <div className={styles.hero} style={{ backgroundImage: "https://images.unsplash.com/photo-1600891964499-2b9c98bdfb8a?auto=format&fit=crop&w=1350&q=80" }}>
        <h1>Sal&Pimienta</h1>
      </div>

      <section className={styles.contentSection}>
        <h2>Snacks Gourmet</h2>
        <p>
          Sal&Pimienta ofrece una selección de comidas rápidas y snacks gourmet para cualquier hora del día. Disfruta de hamburguesas, sándwiches, ensaladas y más, con ingredientes frescos y de alta calidad.
        </p>
        <p>
          Cada receta combina creatividad y sabor, pensada para satisfacer a todos los paladares. La presentación de nuestros platos refleja la atención al detalle y la pasión por la gastronomía.
        </p>
        <p>
          Perfecto para almuerzos, reuniones informales o simplemente para un antojo gourmet, Sal&Pimienta garantiza una experiencia culinaria agradable y deliciosa.
        </p>

        <div className={styles.parallaxContainer}>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1606755962774-ecbc2e8bce2f?auto=format&fit=crop&w=800&q=80" alt="Hamburguesas gourmet"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1599785209707-c9f6f3c82d6b?auto=format&fit=crop&w=800&q=80" alt="Ensaladas frescas"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1617196039431-6b5b7cd7c879?auto=format&fit=crop&w=800&q=80" alt="Snacks variados"/>
        </div>
      </section>
    </Layout>
  );
}
