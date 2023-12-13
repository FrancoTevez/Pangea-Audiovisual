import Equipo from "../components/Equipo"
import AboutUs from "../components/AboutUs"
import { useLocation, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Nosotros() {
  const location = useLocation();
  const { pagina } = useParams();
    console.log(pagina);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      document.querySelectorAll("img").forEach((img) => img.addEventListener("load", () => AOS.refresh()))
      document.querySelectorAll("video").forEach((video) => video.addEventListener("loadeddata", () => AOS.refresh()))
    }, 1000);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Pangea Audiovisual | Sobre Nosotros</title>
        <meta name="description" content="Conoce más sobre nosotros!"/>
        <link rel="canonical" href="/nosotros" />
      </Helmet>
      <div style={{minHeight: `${window.innerHeight - 116}px` }}>
        <AboutUs />
        <Equipo />
      </div>
    </>
    
  )
}

export default Nosotros