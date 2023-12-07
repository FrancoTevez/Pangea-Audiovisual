import {Link} from "react-router-dom"
import logo from "../assets/logoPangea.png"
import '../styles/navbar.css'
import AOS from "aos"
import 'aos/dist/aos.css';

function Logo() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  };

  return (
    <Link to="/"><img src={logo} className='imgLogo' alt="Logo Pangea Audiovisual" onClick={scrollToTop}/></Link>
  )
}

export default Logo