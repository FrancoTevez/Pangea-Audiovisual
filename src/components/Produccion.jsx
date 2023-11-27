import '../styles/prod.css'
import pngServicios from "../assets/pngServicio.png"
import ProdAcordeon from './ProdAcordeon'

function Produccion() {
  return (
    <section className='contenedores'>
        <div className='contProd'>
            <h2 className="tituloProd">Proceso de Producción</h2>
            <p className='parrafoProd'>El contenido como formato de video está en todos lados y todo el tiempo, sin embargo saber utilizarlo es fundamental para cualquier campaña exitosa.</p>
            <p className='parrafoProd'>Esto nos permite trabajar estrechamente con el área de marketing para llegar hacia los resultados esperados.</p>
        </div>
        <div className='contImgProd'>
            <div className='divImgProd'>
              <img src={pngServicios} className='imgProd' alt="Imagen del apartado servicios" />
            </div>
            <ProdAcordeon />
        </div>
    </section>
  )
}

export default Produccion