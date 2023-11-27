import '../styles/socialProof.css'
import {imgSocialProof} from "../imgSocialProof"
import { useEffect, useRef } from 'react';

function SocialProof() {
  const serviciosRef = useRef(null)

  useEffect(() => {
    const fragmentoURL = window.location.hash;
    if (fragmentoURL === '#servicios'){
      serviciosRef.current.scrollIntoView()
    }
  }, [])

  return (
    <div className='contContSocialProof' ref={serviciosRef}>
        <div className="contSocialProof">
            {imgSocialProof.map((imagen, i) => (
                <img src={imagen.img} alt={imagen.alt} key={i} className='imgSocialProof'/>
            ))}
        </div>
        <div className="contSocialProof">
          {imgSocialProof.map((imagen, i) => (
              <img src={imagen.img} alt={imagen.alt} key={i} className='imgSocialProof'/>
          ))}
        </div>
    </div>
  )
}

export default SocialProof