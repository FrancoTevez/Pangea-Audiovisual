import { useState } from "react"
import '../styles/prod.css'
import { useSelector } from "react-redux";

function ProdAcordeon() {
    const idioma = useSelector((state) => state.idioma);
    const acordeonInfo = [
        {
            title: idioma?.leng.procesoSubtitulo1,
            info: idioma?.leng.procesoSub1Texto1,
            info2: idioma?.leng.procesoSub1Texto2,
            info3: idioma?.leng.procesoSub1Texto3,
            info4: ""
        },
        {
            title: idioma?.leng.procesoSubtitulo2,
            info: idioma?.leng.procesoSub2Texto1,
            info2: idioma?.leng.procesoSub2Texto2,
            info3: idioma?.leng.procesoSub2Texto3,
            info4: idioma?.leng.procesoSub2Texto4
        },
        {
            title: idioma?.leng.procesoSubtitulo3,
            info: idioma?.leng.procesoSub3Texto1,
            info2: idioma?.leng.procesoSub3Texto2,
            info3: idioma?.leng.procesoSub3Texto3,
            info4: ""
        }
    ]

  const [acordeon, setAcordeon] = useState(1)  

  function handleClick(i) {
    if(acordeon == i+1){
        setAcordeon(0)
    }else{
        setAcordeon(i+ 1)
    }
  }
 
  return (
    <div className="contAcordeones" >
        {acordeonInfo.map((acor, i) => (
            <div key={i} onClick={() => handleClick(i)} className={acordeon == i+1 ? "contAcor display" : "contAcor"}>
                <div className="contTituloAcor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={acordeon == i+1 ? "svgAcor rotarSvgAcor" : "svgAcor svgAcorAnimation"}>
                        <path d="M12 15.3751L6 9.3751L7.4 7.9751L12 12.5751L16.6 7.9751L18 9.3751L12 15.3751Z" fill="#141538"/>
                    </svg>
                    <h3 className="tituloAcor">{acor.title}</h3>
                </div>
                <p className={acordeon == i+1 ? "pAcor pAcorNone" : "pAcor"}>{acor.info}</p>
                <p className={`${acordeon == i+1 ? "pAcor pAcorNone" : "pAcor"} ${acor.info2 == acordeonInfo[0].info2 ? "cursiva" : undefined}`}>{acor.info2}</p>
                <p className={acordeon == i+1 ? "pAcor pAcorNone" : "pAcor"}>{acor.info3}</p>
                <p className={acordeon== i+1 ? "pAcor pAcorNone" : "pAcor"}>{acor.info4}</p>
            </div>
        ))}
    </div>
  )
}

export default ProdAcordeon