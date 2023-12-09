import Equipo from "../components/Equipo"
import AboutUs from "../components/AboutUs"
import { useLocation, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Nosotros() {
  const location = useLocation();
  const { pagina } = useParams();
    console.log(pagina);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      document.querySelectorAll("img").forEach((img) => img.addEventListener("load", () => AOS.refresh()))
      document.querySelectorAll("video").forEach((video) => video.addEventListener("load", () => AOS.refresh()))
    }, 1000);
  }, [location.pathname]);

  return (
    <div style={{minHeight: `${window.innerHeight - 116}px` }}>
      <AboutUs />
      <Equipo />
    </div>
  )
}

export default Nosotros