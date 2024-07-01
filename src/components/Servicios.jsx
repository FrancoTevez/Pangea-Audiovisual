import '../styles/servicios.css'
import VectorAzul from './VectorAzul'
import png3 from "../assets/sombraGif3.png"
import gif3 from "../assets/gifServicios3.gif"
import png2 from "../assets/sombraGif2.png"
import gif2 from "../assets/gifServicios2.gif"
import png1 from "../assets/sombraGif1.png"
import gif1 from "../assets/gifServicios1.gif"
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'

function Servicios() {
  const idioma = useSelector((state) => state.idioma);

  return (
    <section id='servicios'>
        <div className='contServicios' >
            <div className='contParrafos' >
                {/*<p className='parrafoServicios'>{idioma?.leng.texto1Servicio}</p>
                <p className='parrafoServicios'>{idioma?.leng.texto2Servicio}</p>*/}
                <div className='contVidServ' data-aos="fade-up">
                  <img src={gif1} className='gifServicios' alt={`Video ${idioma?.leng.tituloVidSer1}`} />
                  <img src={png1} className='sombraServicios3' alt="png video 1" />
                  <div className='contTituloVidServ'>
                    <h1 className='tituloVidServ'>{idioma?.leng.tituloVidSer1}</h1>
                    <p className='pVidServ'>{idioma?.leng.texto1VidSer1}</p>
                    <p className='pVidServ'>{idioma?.leng.texto2VidSer1}</p>
                    <p className='pVidServ'>{idioma?.leng.texto3VidSer1}</p>
                  </div>
                </div>
                <div className='contVidServ2' data-aos="fade-up">
                  <div className='contTituloVidServ'>
                    <h2 className='tituloVidServ'>{idioma?.leng.tituloVidSer2}</h2>
                    <p className='pVidServ'>{idioma?.leng.texto1VidSer2}</p>
                  </div>
                  <img src={gif2} className='gifServicios' alt={`Video ${idioma?.leng.tituloVidSer2}`} />
                  <img src={png2} className='sombraServicios2' alt="png video 2" />
                </div>
                <div className='contVidServ' data-aos="fade-up">
                  <img src={gif3} className='gifServicios' alt={`Video ${idioma?.leng.tituloVidSer3}`} />
                  <img src={png3} className='sombraServicios3' alt="png video 3" />
                  <div className='contTituloVidServ'>
                    <h2 className='tituloVidServ'>{idioma?.leng.tituloVidSer3}</h2>
                    <p className='pVidServ'>{idioma?.leng.texto1VidSer3}</p>
                  </div>
                </div>
            </div>
            <Link to='contacto' smooth={true} offset={-113} duration={700}><button className="btnEmpecemos" type='button' style={{zIndex: "200"}}>{idioma?.leng.textoEmpecemos}</button></Link>
        </div>
        <VectorAzul />
    </section>
  )
}

export default Servicios