import Equipo from "../components/Equipo"
import AboutUs from "../components/AboutUs"

function Nosotros() {

  return (
    <div style={{minHeight: `${window.innerHeight - 116}px` }}>
      <AboutUs />
      <Equipo />
    </div>
  )
}

export default Nosotros