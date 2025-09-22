// pages/_app.js
import "../styles/globals.css";
import BackButton from "../components/BackButton";
import WhatsAppButton from "../components/WhatsAppButton";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
      {/* Mostrar BackButton en todas las páginas excepto en inicio */}
      {router.pathname !== "/" && <BackButton />}
      {/* Botón flotante de WhatsApp siempre */}
      <WhatsAppButton />
    </>
  );
}
