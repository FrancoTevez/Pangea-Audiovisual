import './App.css'
import Home from './pages/Home'
import Navbar from './containers/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './pages/Nosotros'
import Footer from './containers/Footer'

function App() {

  return (
    <BrowserRouter>
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
