import { Link } from "react-scroll"
//import LinkNosotros from "../components/LinkNosotros"
import logoBurger from "../assets/logoPangeaBurger.png"
import Logo from "../components/Logo"
import Redes from "../components/Redes"
import { useState } from "react"
import { useSelector } from "react-redux"
//import {Link as LinkRouter} from "react-router-dom"
//import { useLocation } from "react-router-dom"

function NavBurger() {
    const idioma = useSelector((state) => state.idioma);
    const [cerrAb, setCerrAb] = useState("cerrado")
    //const location = useLocation();
    //const pag = location.pathname;

    /*const scrollToSection = (section) => {
        setCerrAb("cerrado")
        setTimeout(() => {
            const element = document.getElementById(section);
            element.scrollIntoView({
                behavior: 'smooth',
                block: "start",
                inline: 'start'
            }); 
        }, 300);
      };*/
    
  return (
    <div style={{width: "100%"}} className="bannerMover ContburgerNav">
        <div className="contLogoBurger">
            <Logo />
            <button type="button" className="butonSvg" onClick={()=> setCerrAb("abierto")} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#141538">
                    <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#EAEBED"/>
                </svg>
            </button>
        </div>   
        <div className={`contLinksBurger ${cerrAb == "cerrado" ? "displayNoneBur" : undefined}`}>
            <div style={{width: "90%", display: "flex", justifyContent: "end", marginTop: "10px"}}>
                 <button type="button" className="butonSvg" onClick={()=> setCerrAb("cerrado")} style={{marginTop: "5px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4.38461 21L3 19.6154L10.6154 12L3 4.38461L4.38461 3L12 10.6154L19.6154 3L21 4.38461L13.3846 12L21 19.6154L19.6154 21L12 13.3846L4.38461 21Z" fill="#EAEBED"/>
                    </svg>
                </button>
            </div>
           
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={logoBurger} alt="logo de Pangea" className="imgLogoBurger"/>
                <p className="pangeaBurger">PANGEA</p>
                <p className="audiovisualBurger">audiovisual</p>
            </div>
            <ul>
                <li>
                    <Link to="InicioLink" className='linksHeader' smooth={true} offset={-70} duration={700} onClick={()=> setCerrAb("cerrado")}>{idioma?.leng.linkInicio}</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='Nosotros' smooth={true} offset={-50} duration={700} onClick={()=> setCerrAb("cerrado")}>{idioma?.leng.linkNosotros}</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='servicios' smooth={true} offset={-50} duration={700} onClick={()=> setCerrAb("cerrado")}>{idioma?.leng.linkServicios}</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='portfolio' smooth={true} offset={-20} duration={700} onClick={()=> setCerrAb("cerrado")}>{idioma?.leng.linkPortfolio}</Link>
                </li>
                <li>
                    <Link className='linksHeader' to='contacto' smooth={true} offset={-113} duration={700} onClick={()=> setCerrAb("cerrado")}>{idioma?.leng.linkContacto}</Link>
                </li>
            </ul>
            <div className="contRedesBurger">
                <Redes /> 
            </div>   
        </div>
    </div>
  )
}

export default NavBurger