
import '../styles/ubiContacto.css'
import Redes from './Redes'

function UbiContacto() {
  return (
    <div className='contUbiContacto'>
        <div className='contTextUbi'>
            <p className='pUbi'>Córdoba, Argentina.</p>
            <p className='pUbi'>Tel: +54 9 3513 92-9046</p>
            <p className='pUbi'>Mail: audiovisualpangea@gmail.com</p>
        </div>
        <div className='contRedesUbi'>
            <Redes />
        </div>
    </div>
  )
}

export default UbiContacto