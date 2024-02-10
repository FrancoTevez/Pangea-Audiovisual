import Equipo from "../components/Equipo"
import AboutUs from "../components/AboutUs"
import 'aos/dist/aos.css';
import VectorAzulNosArriba from "../components/VectorAzulNosArriba";

function Nosotros() {

  return (
    <>
      <VectorAzulNosArriba />
      <div style={{minHeight: `${window.innerHeight - 116}px` }} id="Nosotros">
        <AboutUs />
        <Equipo />
      </div>
    </>
    
  )
}

export default Nosotros