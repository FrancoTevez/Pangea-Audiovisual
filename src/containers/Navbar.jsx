
import Logo from '../components/Logo'
import '../styles/navbar.css'
import { Link } from 'react-scroll'
import NavBurger from './NavBurger'
import { useSelector } from 'react-redux';

function Navbar() {
    const idioma = useSelector((state) => state.idioma);
  return (
    <header>
        <nav className='bannerMover navDesk'>
            <ul>
                <li>
                    <Link className='linksHeader' to='servicios' smooth={true} offset={-50} duration={700}>{idioma?.leng.linkServicios}</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='portfolio' smooth={true} offset={-20} duration={700}>{idioma?.leng.linkPortfolio}</Link>
                </li>
                <li>
                     <Logo />
                </li>
                <li>
                    <Link className='linksHeader' to='Nosotros' smooth={true} offset={-50} duration={700}>{idioma?.leng.linkNosotros}</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='contacto' smooth={true} offset={-113} duration={700}>{idioma?.leng.linkContacto}</Link>
                </li>
            </ul>
        </nav>
        <NavBurger />
    </header>
  )
}

export default Navbar