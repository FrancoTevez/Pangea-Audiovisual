import { useEffect } from "react";
import Body from "../containers/Body"
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      document.querySelectorAll("img").forEach((img) => img.addEventListener("load", () => AOS.refresh()))
      document.querySelectorAll("video").forEach((video) => video.addEventListener("load", () => AOS.refresh()))
    }, 1000);
  }, [location.pathname]);

  return (
    <>
        <Body />
    </>
  )
}

export default Home