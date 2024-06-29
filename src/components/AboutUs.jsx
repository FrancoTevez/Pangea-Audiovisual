import VectorAzul from './VectorAzul'
//import {Link} from "react-router-dom"
import '../styles/nosotros.css'
import { useSelector } from 'react-redux';

function AboutUs() {
  const idioma = useSelector((state) => state.idioma);
  /*
  const scrollToSection = (section) => {
    setTimeout(() => {
        const element = document.getElementById(section);
        element.scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: 'start'
        }); 
    }, 300);
  };
*/
  return (
    <section className='SectionNosotros'>
        <div style={{display: "flex", justifyContent: "center", background: "#443cb4"}}>
            <div className='contNosotros' data-aos="fade-up">
                <h1 className='tituloNosotros'>{idioma?.leng.tituloNosotros}</h1>
                <p className='parrafoServicios'>{idioma?.leng.textoNosotros1}</p>
                <p className='parrafoServicios'>{idioma?.leng.textoNosotros2}</p>
                <p className='parrafoServicios'>{idioma?.leng.textoNosotros3}</p>
                <p className='parrafoServicios'>{idioma?.leng.textoNosotros4}</p>
                <p className='parrafoServicios'>{idioma?.leng.textoNosotros5}</p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default AboutUs