import '../styles/prod.css'
import pngServicios from "../assets/pngServicio.png"
import ProdAcordeon from './ProdAcordeon'
import { useSelector } from 'react-redux';

function Produccion() {
  const idioma = useSelector((state) => state.idioma);
  return (
    <section className='contenedores' >
        <div className='contProd' >
            <h2 className="tituloProd">{idioma?.leng.tituloProceso}</h2>
        </div>
        <div className='contImgProd' data-aos="fade-up">
            <div className='divImgProd'>
              <img src={pngServicios} className='imgProd' alt="Imagen del apartado servicios" />
            </div>
            <ProdAcordeon />
        </div>
    </section>
  )
}

export default Produccion