import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/ParallaxPage.module.css";

export default function KiotoSushiBar() {
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
      <div className={styles.hero} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1350&q=80')" }}>
        <h1>Kioto Sushi Bar</h1>
      </div>

      <section className={styles.contentSection}>
        <h2>Sushi y Cocina Japonesa</h2>
        <p>
          Kioto Sushi Bar ofrece auténticos platos japoneses, sushi fresco y rolls innovadores. Vive una experiencia gastronómica única en un ambiente moderno y acogedor.
        </p>
        <p>
          Cada roll y sushi se prepara con ingredientes frescos, combinando sabores tradicionales y técnicas innovadoras. Contamos también con opciones veganas y menús especiales para grupos y eventos.
        </p>
        <p>
          Con un ambiente íntimo y elegante, Kioto Sushi Bar es el lugar perfecto para cenas románticas, reuniones de amigos o simplemente disfrutar de una experiencia culinaria japonesa de primer nivel.
        </p>

        <div className={styles.parallaxContainer}>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1606755962774-ecbc2e8bce2f?auto=format&fit=crop&w=800&q=80" alt="Sushi fresco"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" alt="Rolls innovadores"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80" alt="Ambiente moderno"/>
        </div>
      </section>
    </Layout>
  );
}
