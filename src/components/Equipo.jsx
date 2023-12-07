import '../styles/equipo.css'
import Redes from './Redes'

function Equipo() {
  return (
    <section className='sectionEquipo'>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
            <h2 className="tituloEquipo">Equipo</h2>
            <div style={{maxWidth: "840px"}} data-aos="fade-up">
                <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                    <div className="contEquipo">
                        <div className='contNombreEquipo'>
                            <h3 className='NombreEquipo'>Matías Armada</h3>
                            <span className='spanEquipo'>Co-founder. CCO y COO.</span>
                            <p className='pEquipo'>Es la mente brillante que con su criterio asertivo y filoso, permanece en constante comunicación con el exterior para identificar los problemas que es necesario resolver en los clientes que confían en nosotros y transformarlos en soluciones creativas y eficientes.</p>
                        </div>
                        <div className='contNombreEquipo'>
                            <h3 className='NombreEquipo'>Pablo Sambataro</h3>
                            <span className='spanEquipo'>Co-founder. CEO.</span>
                            <p className='pEquipo'>Con un ojo meticuloso para los detalles y un compromiso con la excelencia es quien se encarga de llevar esas soluciones al mundo creativo del diseño, la narrativa, la animación y el video. Su misión es dejar una huella duradera en la mente y corazones de las audiencias correspondientes que vean dichas piezas audiovisuales.</p>
                        </div>  
                    </div>
                </div>  
                <Redes />
            </div>
            
           
        </div>
       
    </section>
  )
}

export default Equipo