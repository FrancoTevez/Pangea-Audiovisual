import bannerDesk from "../assets/Banner_Desktop.mp4"
import bannerTablet from "../assets/Banner_Tablet.mp4"
import bannerMobile from "../assets/Banner_Mobile.mp4"
import { useEffect, useRef } from "react";

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
      <div style={{marginTop: "64px"}}>
        <video ref={videoRef} autoPlay loop muted style={{width: "100%"}}>
          Tu navegador no soporta video.
        </video>
      </div>
    );
  }
  
  export default Banners;