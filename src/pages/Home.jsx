import { useEffect, useState } from "react";
import Body from "../containers/Body"
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import es from "../leng-es";
import en from "../leng-en";
import { idiomaActions } from "../store/idiomaSlice";
import { useDispatch } from "react-redux";
import '../styles/home.css'
import { Helmet } from "react-helmet-async";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const userLeng = navigator.language
  const [toggled, setToggled] = useState(false)

  const changeToggle = () => {
    if(toggled){
      dispatch(
        idiomaActions.SET_LENG({ leng: es})
      );
    }else{
      dispatch(
        idiomaActions.SET_LENG({ leng: en})
      );
    }
    setToggled(!toggled)
  }
  
  useEffect(() => {
    if(userLeng.includes("es")){
      setToggled(false)
      dispatch(
        idiomaActions.SET_LENG({ leng: es})
      );
    }else{
      setToggled(true)
      dispatch(
        idiomaActions.SET_LENG({ leng: en})
      );
    }
    setTimeout(() => {
      AOS.init();
      document.querySelectorAll("img").forEach((img) => img.addEventListener("load", () => AOS.refresh()))
      document.querySelectorAll("video").forEach((video) => video.addEventListener("loadeddata", () => AOS.refresh()))
    }, 1000);
  }, [location.pathname, dispatch, userLeng]);

  return (
    <>
        <div className="contDivButonTogle">
          <div className="divButonToggle" onClick={changeToggle}>
            <button type="button" className={`butonToggle ${toggled ? "toggleEn" : "toggleEs"}`} >{toggled ? "EN" : "ES"}</button>
          </div>
        </div>
        <Body />
        <Helmet>
          <html lang={!toggled ? "es" : "en"} />
          <title>{!toggled ? "Pangea Audiovisual | Contenido audiovisual para redes aplicado a estrategias de marketing" : "Pangea Audiovisual | Audiovisual Content for Social Media Applied to Marketing Strategies"}</title>
          <meta name="description" content={!toggled ? "Si tenés una empresa con presencia online, o una empresa de marketing digital, te ayudamos a contar con el contenido audiovisual preciso que necesites. Mediante el Motion Graphics y la Edición de Video aplicados a estrategias de marketing, dejamos una huella duradera en la mente y los corazones de tu audiencia." : "If you have an online presence or a digital marketing company, we help you have the precise audiovisual content you need. Through Motion Graphics and Video Editing applied to marketing strategies, we leave a lasting impression on the minds and hearts of your audience."} data-rh="true"/>
          <meta name="keywords" content={!toggled ? "Motion Graphics, Audiovisual, Pangea Audiovisual, Edición de video, Marketing" : "Motion Graphics, Audiovisual, Pangea Audiovisual, Video Editing, Marketing"} />
        </Helmet>
    </>
  )
}

export default Home