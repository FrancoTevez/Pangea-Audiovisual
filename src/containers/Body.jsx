
import Banners from '../components/Banners'
import Contacto from '../components/Contacto'
import Portfolio from '../components/Portfolio'
import Produccion from '../components/Produccion'
import Servicios from '../components/Servicios'
import SocialProof from '../components/SocialProof'
import Animaciones from '../components/Animaciones'
import '../styles/body.css'
import Nosotros from './Nosotros'

function Body() {
  return (
    <>
        <Banners />
        <SocialProof />
        <main>
          <Servicios />
          <Animaciones />
          <Produccion />
        </main>
        <Portfolio />
        <Contacto />
        <Nosotros />
    </>
  )
}

export default Body