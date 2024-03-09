import { useSelector } from 'react-redux';
import '../styles/servicios.css'
import VectorAzul from './VectorAzul'

function Servicios() {
  const idioma = useSelector((state) => state.idioma);
  
  return (
    <section id='servicios'>
        <div className='contServicios' >
            <h1 className='tituloPrincipal tituloServicios'>{idioma?.leng.tituloPrincipal}</h1>
            <div className='contParrafos' data-aos="fade-up">
                <p className='parrafoServicios'>{idioma?.leng.texto1Servicio}</p>
                <p className='parrafoServicios'>{idioma?.leng.texto2Servicio}</p>
            </div>
        </div>
        <VectorAzul />
    </section>
  )
}

export default Servicios