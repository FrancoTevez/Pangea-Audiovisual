import bannerDesk from "../assets/Banner_Desktop.mp4"
import bannerTablet from "../assets/Banner_Tablet.mp4"
import bannerMobile from "../assets/Banner_Mobile.mp4"
import { useEffect, useRef } from "react";
import { Link } from 'react-scroll'

function Banners() {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
  
      const updateSource = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth <= 576) {
          video.src = bannerMobile;
        } else if (screenWidth <= 1024) {
          video.src = bannerTablet;
        } else {
          video.src = bannerDesk;
        }
  
        video.load(); // Recargar el video con la nueva fuente
      };
  
      updateSource();
  
      const handleResize = () => {
        updateSource();
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div style={{marginTop: "54px", position: "relative", width:"100vw"}}>
        <video ref={videoRef} autoPlay loop muted style={{width: "100vw", objectFit: "cover"}}>
          Tu navegador no soporta video.
        </video>
        <div className="contBtnContacto">
          <Link to='contacto' smooth={true} offset={-113} duration={700}><button className="inputEnviar btnBanner">CONTÁCTANOS</button></Link>
        </div>
        <div className="contArrowBanner">
          <Link style={{width: "30px", cursor: "pointer"}} to='servicios' smooth={true} offset={-173} duration={700}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="arrowBanner" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Link>
          
        </div>
      </div>
    );
  }
  
  export default Banners;