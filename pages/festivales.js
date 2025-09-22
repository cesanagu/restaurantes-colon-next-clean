import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/ParallaxPage.module.css";

export default function Festivales() {
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
      <div className={styles.hero} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1350&q=80')" }}>
        <h1>Festivales - Oktoberfest</h1>
      </div>

      <section className={styles.contentSection}>
        <h2>Celebración y Tradición</h2>
        <p>
          Cada año, celebramos Oktoberfest con un ambiente lleno de alegría, música, comida típica alemana y, por supuesto, cerveza artesanal. Este evento es perfecto para familias, amigos y amantes de la cultura bávara.
        </p>
        <p>
          Durante Oktoberfest, los visitantes disfrutan de platos tradicionales como bratwurst, pretzels y sauerkraut, acompañados de la mejor selección de cervezas nacionales e internacionales. La decoración y música crean una experiencia inmersiva.
        </p>
        <p>
          No solo es un festival gastronómico, sino también un espacio cultural donde se realizan juegos, concursos y actividades para todas las edades. Cada edición busca ofrecer diversión y autenticidad a cada asistente.
        </p>

        <div className={styles.parallaxContainer}>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1600796258905-0f8f1f11b0f2?auto=format&fit=crop&w=800&q=80" alt="Cervezas Oktoberfest"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80" alt="Platos típicos"/>
          <img className={styles.parallaxImage} src="https://images.unsplash.com/photo-1581580808779-37cf47a20b1c?auto=format&fit=crop&w=800&q=80" alt="Celebración festival"/>
        </div>
      </section>
    </Layout>
  );
}
