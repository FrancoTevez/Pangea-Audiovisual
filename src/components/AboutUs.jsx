import VectorAzul from './VectorAzul'
//import {Link} from "react-router-dom"
import '../styles/nosotros.css'

function AboutUs() {
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
        <div style={{display: "flex", justifyContent: "center", background: "#4144B8"}}>
            <div className='contNosotros' data-aos="fade-up">
                <h1 className='tituloNosotros'>Nosotros</h1>
                <p className='parrafoServicios'>Nuestra satisfacción más grande es trabajar de tal manera que nuestros resultados superen cualquier expectativa.</p>
                <p className='parrafoServicios'>Hemos logrado campañas exitosas mediante nuestros trabajos, en parte porque nos destacamos por la interpretación y buena comunicación con el cliente.</p>
                <p className='parrafoServicios'>Pangea nació con la iniciativa de potenciar emprendimientos amigos, mediante la publicidad audiovisual llegando a impactar positivamente en cada una de sus audiencias.</p>
                <p className='parrafoServicios'>Por eso, actualmente elegimos el mundo de las redes sociales, para impulsar el crecimiento de marcas y empresas, trabajando junto al área de marketing y paid media.</p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default AboutUs