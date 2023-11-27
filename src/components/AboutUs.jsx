import VectorAzul from './VectorAzul'
import {Link} from "react-router-dom"
import '../styles/nosotros.css'

function AboutUs() {

  return (
    <section className='SectionNosotros'>
        <div style={{display: "flex", justifyContent: "center", background: "#4144B8"}}>
            <div className='contNosotros'>
                <h1 className='tituloNosotros'>Nosotros</h1>
                <p className='parrafoServicios'>Pangea va más allá de un simple estudio visual creativo. Nuestra satisfacción y deseo más profundo es que el trabajo que realizamos supere tus expectativas. En el afán de lograrlo, descubrimos que la escucha, la comunicación y la empatía son talentos propios y esenciales a tal fin.</p>
                <p className='parrafoServicios'>Pangea nace en 2019 con la iniciativa de empoderar emprendimientos de amigos mediante la publicidad audiovisual. La idea se enfocó en lograr que éste tipo de contenido sea capaz de impactar positivamente en sus audiencias.</p>
                <p className='parrafoServicios'>Actualmente, luego de un gran trayecto y un camino por seguir construyendo, elegimos el mundo de las redes sociales para potenciar el crecimiento de empresas, trabajando junto al área de marketing y paid media.</p>
                <p className='parrafoServicios'>Estar sumergidos en este rubro nos brinda constantemente conocimientos invaluables que moldean nuestro expertise para elevar la calidad de nuestros <Link to="/#servicios" className='linkToServicios'>servicios.</Link></p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default AboutUs