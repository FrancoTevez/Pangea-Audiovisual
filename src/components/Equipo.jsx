import '../styles/equipo.css'
import Redes from './Redes'
import fotoCabeza from "../assets/cabezaWeb.jpg"
import fotoBainson from "../assets/bainsonWeb.jpg"

function Equipo() {
  return (
    <section className='sectionEquipo'>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
            <div style={{maxWidth: "840px"}} data-aos="fade-up">
                <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                    <div className="contEquipo">
                        <div className='contNombreEquipo'>
                            <img src={fotoCabeza} className='fotoRetrato' alt="Imagen retrato de Matías Armada" />
                            <h3 className='NombreEquipo'>Matías Armada</h3>   
                            <span className='spanEquipo'>Co-founder. CEO.</span>
                        </div>
                        <div className='contNombreEquipo'>
                            <img src={fotoBainson} className='fotoRetrato' alt="Imagen retrato de Pablo Sambataro" />
                            <h3 className='NombreEquipo'>Pablo Sambataro</h3>
                            <span className='spanEquipo'>Co-founder. CCO y COO.</span>
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