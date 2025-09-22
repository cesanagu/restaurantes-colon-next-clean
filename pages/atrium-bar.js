import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/ParallaxPage.module.css";

export default function AtriumBar() {
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
      <div className={styles.hero} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1350&q=80')" }}>
        <h1>Atrium Bar</h1>
      </div>

      <section className={styles.contentSection}>
        <h2>Cócteles y Ambiente Exclusivo</h2>
        <p>
          Atrium Bar ofrece un espacio moderno y elegante para disfrutar de cócteles clásicos y de autor. Su ambiente sofisticado es perfecto para reuniones de negocios, citas o momentos de relax.
        </p>
        <p>
          Nuestro equipo de bartenders expertos combina técnicas tradicionales y modernas para crear bebidas únicas que destacan por su presentación y sabor. Además, ofrecemos una selección de licores premium y vinos cuidadosamente seleccionados.
        </p>
        <p>
          Con música ambiental, iluminación cálida y un servicio excepcional, Atrium Bar garantiza una experiencia de coctelería completa en un entorno acogedor y exclusivo.
        </p>

        <div className={styles.parallaxContainer}>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1532634726-8b9fb998eb65?auto=format&fit=crop&w=800&q=80" alt="Cócteles"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" alt="Ambiente bar"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1582719478171-7a3c6b52cf63?auto=format&fit=crop&w=800&q=80" alt="Reuniones sociales"/>
        </div>
      </section>
    </Layout>
  );
}
