import './App.css'
import Home from './pages/Home'
import Navbar from './containers/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './containers/Footer'
import videoLogo from "./assets/logoVideoIntro.mp4"
import { useEffect, useRef, useState } from 'react'

function App() {
  const videoRef = useRef(null);
  const [videoCargado, setVideoCargado] = useState(false);

  useEffect(() => {
    const handleLoadedData = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => console.error('Error al iniciar la reproducción:', error));
      }
    };

    const handleVideoPlay = () => {
      setVideoCargado(true);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.addEventListener('play', handleVideoPlay);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={videoCargado ? "fondoBlanco logoIntro" : "fondoBlanco"}>
        <video src={videoLogo} ref={videoRef} className={videoCargado ? "videoIntroPangea" : "displayNoneAll"} muted></video>
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
