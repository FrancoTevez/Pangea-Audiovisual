import '../styles/servicios.css'
import VectorAzul from './VectorAzul'

function Servicios() {

  return (
    <section id='servicios'>
        <div className='contServicios'>
            <h2 className='tituloServicios'>Servicios</h2>
            <div className='contParrafos'>
                <p className='parrafoServicios'>Hablamos el idioma del diseño, animación y video, pero lo que nos hace únicos es que lo conectamos con el mundo del marketing y la publicidad, teniendo la facilidad de ver a través de tus ojos y el de las empresas y clientes que han confiado en nosotros.</p>
                <p className='parrafoServicios'>Sólo entendiendo profundamente tu necesidad podemos brindar soluciones a problemas reales y ayudarte a alcanzar lo que busques.</p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default Servicios