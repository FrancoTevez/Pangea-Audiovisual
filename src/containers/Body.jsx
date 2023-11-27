
import Banners from '../components/Banners'
import Contacto from '../components/Contacto'
import Portfolio from '../components/Portfolio'
import Produccion from '../components/Produccion'
import Servicios from '../components/Servicios'
import SocialProof from '../components/SocialProof'
import Animaciones from '../components/Animaciones'
import '../styles/body.css'

function Body() {
  return (
    <div>
        <Banners />
        <SocialProof />
        <Servicios />
        <Produccion />
        <Animaciones /> 
        <Portfolio />
        <Contacto />
    </div>
  )
}

export default Body