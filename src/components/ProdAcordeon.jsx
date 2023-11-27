import { useState } from "react"
import '../styles/prod.css'

const acordeonInfo = [
    {
        title: "1. Primero, investigar.",
        info: "Es fundamental investigar la personalidad de la marca, su esencia y la de sus competidores.",
        info2: "Permite ser precisos en un mar de información: porque allana el camino y ofrece un terreno sólido sobre el cual avanzar firmemente.",
        info3: "Reflejar esto en cada elemento del video es lo que al final le brinda contenido de valor y coherencia."
    },
    {
        title: "2. Producción, acción!",
        info: "Momento de la acción. Todos nuestros talentos están en post de materializar la investigación previa y que el video cobre vida. ",
        info2: "Cada proyecto es único, puede requerir diseño de sonido, o particular importancia en la música para reforzar el mensaje y el potencial del video.",
        info3: "En caso que el proyecto lo requiera, desarrollar un guion y su correspondiente “storyboard.”"
    },
    {
        title: "3. Calidad final del video.",
        info: "Está todo listo y es hora de revisar. De ver mil veces el video final para corregir cualquier error que tienda a ocultarse.",
        info2: "En términos de productividad se traduce en eficiencia, porque ahorra tiempo en feedback y afila los detalles que bridan calidad.",
        info3: ""
    }
]


function ProdAcordeon() {
  const [acordeon, setAcordeon] = useState(0)  

  function handleClick(i) {
    if(acordeon == i+1){
        setAcordeon(0)
    }else{
        setAcordeon(i+ 1)
    }
  }
 
  return (
    <div className="contAcordeones">
        {acordeonInfo.map((acor, i) => (
            <div key={i} onClick={() => handleClick(i)} className={acordeon == i+1 ? "contAcor display" : "contAcor"}>
                <div className="contTituloAcor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={acordeon == i+1 ? "svgAcor rotarSvgAcor" : "svgAcor"}>
                        <path d="M12 15.3751L6 9.3751L7.4 7.9751L12 12.5751L16.6 7.9751L18 9.3751L12 15.3751Z" fill="#141538"/>
                    </svg>
                    <h3 className="tituloAcor">{acor.title}</h3>
                </div>
                <p className={acordeon == i+1 ? "pAcor pAcorNone" : "pAcor"}>{acor.info}</p>
                <p className={`${acordeon == i+1 ? "pAcor pAcorNone" : "pAcor"} ${acor.info2 == acordeonInfo[1].info2 ? "cursiva" : undefined}`}>{acor.info2}</p>
                <p className={acordeon == i+1 ? "pAcor pAcorNone" : "pAcor"}>{acor.info3}</p>
            </div>
        ))}
    </div>
  )
}

export default ProdAcordeon