import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1350&q=80')" }}>
        <h1>Hilton Colón Guayaquil</h1>
      </div>

      <div className="grid">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" alt="Café Colón" />
          <div className="card-content">
            <h2>Café Colón</h2>
            <p>Gastronomía internacional con un servicio excepcional.</p>
            <Link href="/cafe-colon" className="card-content">Ver más</Link>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Vereda Tropical" />
          <div className="card-content">
            <h2>Vereda Tropical</h2>
            <p>Delicias tropicales en un ambiente relajado.</p>
            <Link href="/vereda-tropical" className="card-content">Ver más</Link>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1633415983912-ab21f9772b3a?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sal&Pimienta" />
          <div className="card-content">
            <h2>Sal&Pimienta</h2>
            <p>Comida rápida y snacks gourmet para todos los gustos.</p>
            <Link href="/sal-pimienta" className="card-content">Ver más</Link>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1679600436973-94ae622ddced?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Atrium Bar" />
          <div className="card-content">
            <h2>Atrium Bar</h2>
            <p>Cocteles y bebidas premium en un ambiente elegante.</p>
            <Link href="/atrium-bar" className="card-content">Ver más</Link>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1641932982747-bd7be260a040?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kioto Sushi" />
          <div className="card-content">
            <h2>Kioto Sushi</h2>
            <p>Sushi fresco y especialidades japonesas auténticas.</p>
            <Link href="/kioto-sushi" className="card-content">Ver más</Link>
          </div>
        </div>

                <div className="card">
          <img src="https://images.unsplash.com/photo-1670124495894-52ba7ee378a9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Atrium Bar" />
          <div className="card-content">
            <h2>Festivales</h2>
            <p>OKTOBERFEST</p>
            <Link href="/festivales" className="card-content">Ver más</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
