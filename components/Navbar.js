import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">Inicio</Link> |{" "}
        <Link href="/cafe-colon">Café Colón</Link> |{" "}
        <Link href="/vereda-tropical">Vereda Tropical</Link> |{" "}
        <Link href="/sal-pimienta">Sal&Pimienta</Link> |{" "}
        <Link href="/atrium-bar">Atrium Bar</Link> |{" "}
        <Link href="/kioto-sushi">Kioto Sushi</Link> |{" "}
        <Link href="/contact">Contactanos</Link>
      </nav>
    </header>
  );
}
