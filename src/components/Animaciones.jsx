import '../styles/animaciones.css'
import { useSelector } from "react-redux";

function Animaciones() {
    const idioma = useSelector((state) => state.idioma);
    const videos = idioma.leng.videosMotion

  return (
    <section className="contenedores" >
        <h2 className="tituloProd">{idioma?.leng.tituloMotion}</h2>
        <div className="contenedores" data-aos="fade-up">
            <div className="contVideos" >
                {videos && videos.map((video, i) => (
                    <article key={i}>
                        <video autoPlay muted loop className="videoAnim">
                            <source src={video.vid} type="video/mp4"/>
                        </video>
                        <h3 className="tituloVideo">{video.title}</h3>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Animaciones