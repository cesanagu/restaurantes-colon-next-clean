import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>© 2025 Hilton Colón Guayaquil - Restaurantes y Bares</p>
      </footer>
    </>
  );
}
