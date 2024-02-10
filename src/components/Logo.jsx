import { Link } from 'react-scroll'
import logo from "../assets/logoPangea.png"
import '../styles/navbar.css'

function Logo() {
/*  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };*/

  return (
    <Link to="InicioLink" smooth={true} offset={-70} duration={700}><img src={logo} className='imgLogo' alt="Logo Pangea Audiovisual" style={{cursor: "pointer"}}/></Link>
  )
}

export default Logo