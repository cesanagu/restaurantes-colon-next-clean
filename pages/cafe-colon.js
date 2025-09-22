// pages/cafe-colon.js
import Layout from "../components/Layout";
import { useEffect } from "react";
import styles from "../styles/FreehandPage.module.css";

export default function CafeColon() {
  const descriptions = [
    {
      text: "Café Colón ofrece un espacio elegante para disfrutar de buffets internacionales, desayunos completos y cenas temáticas.",
      img: "https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      text: "Cada plato combina ingredientes frescos y locales, fusionando tradición e innovación.",
      img: "https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      text: "Ideal para reuniones de negocio, familias o momentos especiales, Café Colón garantiza una experiencia culinaria inolvidable.",
      img: "https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0"
    }
  ];

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
      <div
        className={styles.hero}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571989569011-ff63072f08b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0')"
        }}
      >
        <h1>Café Colón</h1>
      </div>

      <section className={styles.textBlock}>
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`${styles.fadeInItem} flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center mb-8`}
          >
            <p className="md:w-1/2 p-4">{desc.text}</p>
            <img
              src={desc.img}
              alt="Imagen Café Colón"
              className="md:w-1/2 p-4 object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </section>
    </Layout>
  );
}
