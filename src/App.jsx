import './App.css'
import Home from './pages/Home'
import Navbar from './containers/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './pages/Nosotros'
import Footer from './containers/Footer'
import videoLogo from "./assets/logoVideoIntro.mp4"

function App() {

  return (
    <BrowserRouter>
      <div className='logoIntro'>
        <video src={videoLogo} className='videoIntroPangea' autoPlay muted></video>
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
