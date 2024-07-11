import Formulario from "./Formulario"
import '../styles/formulario.css'
import UbiContacto from "./UbiContacto"
import Redes from "./Redes"
import { useSelector } from "react-redux";


function Contacto() {
  const idioma = useSelector((state) => state.idioma);
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2 className="tituloContacto" id="contacto">{idioma?.leng.tituloContacto}</h2>
      <div className="contFormulario" data-aos="fade-up">
        <Formulario />
        <UbiContacto />
        <div className='contTextUbi2'>
          <p className='pUbi'>Tel: +54 9 3513 92-9046</p>
          <p className='pUbi'>Mail: audiovisualpangea@gmail.com</p>
        </div>
        <div className='contRedesUbi2'>
          <Redes />
        </div>
      </div>
    </div>
  )
}

export default Contacto