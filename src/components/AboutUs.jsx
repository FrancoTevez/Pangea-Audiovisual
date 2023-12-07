import VectorAzul from './VectorAzul'
import {Link} from "react-router-dom"
import '../styles/nosotros.css'

function AboutUs() {

  return (
    <section className='SectionNosotros'>
        <div style={{display: "flex", justifyContent: "center", background: "#4144B8"}}>
            <div className='contNosotros'>
                <h1 className='tituloNosotros'>Nosotros</h1>
                <p className='parrafoServicios'>Nuestra satisfacción y deseo más profundo es que el trabajo que realizamos supere tus expectativas. En el afán de lograrlo, descubrimos que la escucha, la comunicación y la empatía son las mejores vías para tal fin.</p>
                <p className='parrafoServicios'>Pangea nace en 2019 con la iniciativa de empoderar emprendimientos de amigos, mediante la publicidad audiovisual. Así nos fuimos dando cuenta cómo este tipo de contenido impactaba positivamente en cada una de sus audiencias.</p>
                <p className='parrafoServicios'>Por eso, actualmente elegimos el mundo de las redes sociales: para potenciar el crecimiento de empresas, trabajando junto al área de marketing y paid media.</p>
                <p className='parrafoServicios'>Agradecemos estar sumergidos en este rubro, porque constantemente nos brinda conocimientos invaluables para elevar la calidad de nuestros <Link to="/#servicios" className='linkToServicios'>servicios.</Link></p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default AboutUs