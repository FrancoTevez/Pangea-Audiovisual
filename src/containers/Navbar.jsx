
import Logo from '../components/Logo'
import '../styles/navbar.css'
import { Link } from 'react-scroll'
import NavBurger from './NavBurger'

function Navbar() {

  return (
    <header>
        <nav className='navDesk bannerMover'>
            <ul>
                <li>
                    <Link className='linksHeader' to='servicios' smooth={true} offset={-50} duration={700}>Servicios</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='portfolio' smooth={true} offset={-20} duration={700}>Portfolio</Link>
                </li>
                <li>
                     <Logo />
                </li>
                <li>
                    <Link className='linksHeader' to='Nosotros' smooth={true} offset={-50} duration={700}>Nosotros</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='contacto' smooth={true} offset={-113} duration={700}>Contacto</Link>
                </li>
            </ul>
        </nav>
        <NavBurger />
    </header>
  )
}

export default Navbar