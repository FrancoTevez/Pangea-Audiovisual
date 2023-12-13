import LinkNosotros from '../components/LinkNosotros'
import Logo from '../components/Logo'
import '../styles/navbar.css'
import { Link } from 'react-scroll'
import {Link as LinkRouter} from "react-router-dom"
import NavBurger from './NavBurger'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
    const location = useLocation();
    const [pag, setPag] = useState("")

    useEffect(() => {
        const rutaActual = location.pathname;
        setPag(rutaActual)
      }, [location.pathname]);

      const scrollToSection = (section) => {
        setTimeout(() => {
            const element = document.getElementById(section);
            console.log(element);
            element.scrollIntoView({
                behavior: 'smooth',
                block: "start",
                inline: 'start'
            }); 
        }, 300);
      };

  return (
    <header className='bannerMover'>
        <nav className='navDesk'>
            <ul>
                <li>
                    <Logo />
                </li>
                <li>
                    {pag == "/nosotros" ? <LinkRouter onClick={() => scrollToSection("servicios")} className='linksHeader' to='/' >Servicios</LinkRouter> : <Link className='linksHeader' to='servicios' smooth={true} offset={-50} duration={700}>Servicios</Link>}
                </li>
                <li>
                    {pag == "/nosotros" ? <LinkRouter onClick={() => scrollToSection("portfolio")} className='linksHeader' to='/' >Portfolio</LinkRouter> : <Link className='linksHeader' to='portfolio' smooth={true} offset={-20} duration={700}>Portfolio</Link>}
                </li>
                <li>

                    <LinkNosotros />
                </li>
                <li>
                    {pag == "/nosotros" ? <LinkRouter onClick={() => scrollToSection("contacto")} className='linkHCont' to='/' >Contacto</LinkRouter> : <Link className='linkHCont' to='contacto' smooth={true} offset={-113} duration={700}>Contacto</Link>}
                </li>
            </ul>
        </nav>
        <NavBurger />
    </header>
  )
}

export default Navbar