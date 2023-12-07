import {Link} from "react-router-dom"
import logo from "../assets/logoPangea.png"
import '../styles/navbar.css'

function Logo() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  return (
    <Link to="/"><img src={logo} className='imgLogo' alt="Logo Pangea Audiovisual" onClick={scrollToTop}/></Link>
  )
}

export default Logo