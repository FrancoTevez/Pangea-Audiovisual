import { videos } from "../videosAnim.js"
import '../styles/animaciones.css'

function Animaciones() {
  return (
    <section className="contenedores" >
        <h2 className="tituloProd">¿Qué podes hacer con la animación motion graphics?</h2>
        <div className="contenedores" data-aos="fade-up">
            <div className="contVideos" >
                {videos.map((video, i) => (
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