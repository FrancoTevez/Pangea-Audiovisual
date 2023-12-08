import './App.css'
import Home from './pages/Home'
import Navbar from './containers/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './pages/Nosotros'
import Footer from './containers/Footer'
import videoLogo from "./assets/logoVideoIntro.mp4"
import { useEffect, useRef, useState } from 'react'

function App() {
  const videoRef = useRef(null);
  const [videoCargado, setVideoCargado] = useState(false);

  useEffect(() => {
    const handleLoadedData = () => {
      setVideoCargado(true);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={videoCargado ? "fondoBlanco logoIntro" : "fondoBlanco"}>
        <video src={videoLogo} ref={videoRef} className={videoCargado ? "videoIntroPangea" : "displayNoneAll"} autoPlay muted></video>
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='nosotros' element={<Nosotros />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
