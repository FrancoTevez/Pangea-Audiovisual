import '../styles/servicios.css'
import VectorAzul from './VectorAzul'

function Servicios() {

  return (
    <section id='servicios'>
        <div className='contServicios' >
            <h1 className='tituloServicios tituloPrincipal'>Motion Graphics y Edición de Video aplicado a estrategias de marketing</h1>
            <div className='contParrafos' data-aos="fade-up">
                <p className='parrafoServicios'>Hablamos el idioma del diseño, animación y video, pero lo que nos hace únicos es que sabemos conectarlo con el mundo del marketing y la publicidad.</p>
                <p className='parrafoServicios'>Analizamos la necesidad de cada cliente para brindar soluciones reales a objetivos concretos y alcanzar resultados exitosos.</p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default Servicios