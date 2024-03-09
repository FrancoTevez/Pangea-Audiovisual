import '../styles/portfolio.css'
import videoHor from "../assets/vidHorPortfolio.mp4"
import videoVer1 from "../assets/vidVer1Portfolio.mp4"
import videoVer2 from "../assets/vidVer2Portfolio.mp4"
import videoCua1 from "../assets/vidCua1Portfolio.mp4"
import videoCua2 from "../assets/vidCua2Portfolio.mp4"
import videoCua3 from "../assets/vidCua3Portfolio.mp4"
import { useRef } from 'react';
import { useState } from 'react';
import VectorPortArriba from './VectorPortArriba'
import VectorPortAbajo from './VectorPortAbajo'
import { useSelector } from 'react-redux'

function Portfolio() {
  const idioma = useSelector((state) => state.idioma);
  const videoHorRef = useRef(null);
  const videoVer1Ref = useRef(null);
  const videoVer2Ref = useRef(null);
  const videoCua1Ref = useRef(null);
  const videoCua2Ref = useRef(null);
  const videoCua3Ref = useRef(null);
  const videoHorRefMob = useRef(null);
  const videoVer1RefMob = useRef(null);
  const videoVer2RefMob = useRef(null);
  const videoCua1RefMob = useRef(null);
  const videoCua2RefMob = useRef(null);
  const videoCua3RefMob = useRef(null);
  const [arribaHor, setArribaHor] = useState(false)
  const [arribaVer, setArribaVer] = useState(false)
  const [arribaVer2, setArribaVer2] = useState(false)
  const [arribaCua1, setArribaCua1] = useState(false)
  const [arribaCua2, setArribaCua2] = useState(false)
  const [arribaCua3, setArribaCua3] = useState(false)

  return (
    <section className="contenedores" id='portfolio' >
      <VectorPortArriba />
      <div className="contPortfolio" >
        <h2 className="tituloPortfolio">{idioma?.leng.tituloPortfolio}</h2>
        <div className='contTodosLosVideos' data-aos="fade-up">
          <div className='contVideosPort'>
            <div onMouseEnter={() => {
                setArribaHor(true)
               videoHorRef.current.play()
                }} onMouseLeave={()=> {
                  setArribaHor(false)
                  videoHorRef.current.pause()
               }} className={arribaHor ? "contVideoHor margin20" : "contVideoHor"}>
              <div className={arribaHor ? "sombraVid sombraVidOp" : "sombraVid"}></div>
              <div className={arribaHor ? "contTituloDiv cTDOp" : "contTituloDiv"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoHor}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoHor}</p>
              </div>
             <div className='contSvg'>
               <a href="https://www.behance.net/gallery/167008277/L-A-Estudio-Juridico-Motion-Graphics-Descriptivo" target='_blank' rel='noreferrer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                  </svg>
               </a>
              </div>
             <video loop muted className="vidHor" ref={videoHorRef}>
                <source src={videoHor} type="video/mp4" />
             </video>
            </div>

            <div onMouseEnter={() => {
                setArribaVer(true)
                videoVer1Ref.current.play()
                }} onMouseLeave={()=> {
                  setArribaVer(false)
                  videoVer1Ref.current.pause()
                }} className={arribaVer ? "contVideoVer margin20" : "contVideoVer"}>
             <div className={arribaVer ? "sombraVidVer sombraVidOp" : "sombraVidVer"}></div>
             <div className={arribaVer ? "contTituloDivVer cTDOp" : "contTituloDivVer"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoVer1}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoVer1}</p>
              </div>
              <div className='contSvgVer'>
               <a href="https://www.behance.net/gallery/163332893/Video-ADS-Publicitario-CARA-LOREN-ACTIVE-" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                   <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                  </svg>
               </a>
              </div>
             <video loop muted className="vidVer" ref={videoVer1Ref}>
                <source src={videoVer1} type="video/mp4" />
             </video>
            </div>

            <div onMouseEnter={() => {
               setArribaVer2(true)
               videoVer2Ref.current.play()
               }} onMouseLeave={()=> {
                 setArribaVer2(false)
                  videoVer2Ref.current.pause()
                }} className={arribaVer2 ? "contVideoVer margin20" : "contVideoVer"}>
             <div className={arribaVer2 ? "sombraVidVer sombraVidOp" : "sombraVidVer"}></div>
              <div className={arribaVer2 ? "contTituloDivVer cTDOp" : "contTituloDivVer"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoVer2}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoVer2}</p>
              </div>
              <div className='contSvgVer'>
                <a href="https://www.behance.net/gallery/154028419/Campanas-Publicitacias-en-Redes-Sociales-CycleTown" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidVer" ref={videoVer2Ref}>
              <source src={videoVer2} type="video/mp4" />
             </video>
            </div>
          </div>

          <div className='contVideoPort2'>

            <div onMouseEnter={() => {
               setArribaCua1(true)
               videoCua1Ref.current.play()
               }} onMouseLeave={()=> {
                 setArribaCua1(false)
                  videoCua1Ref.current.pause()
                }} className={arribaCua1 ? "contVideoCua margin20" : "contVideoCua"}>
             <div className={arribaCua1 ? "sombraVidCua sombraVidOp" : "sombraVidCua"}></div>
              <div className={arribaCua1 ? "contTituloDivCua cTDOp" : "contTituloDivCua"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoCua1}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoCua1}</p>
              </div>
              <div className='contSvgCua'>
                <a href="https://www.behance.net/gallery/162950147/Video-Ads-Publicitario-de-EVORA" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidCua" ref={videoCua1Ref}>
              <source src={videoCua1} type="video/mp4" />
             </video>
            </div>

            <div onMouseEnter={() => {
               setArribaCua2(true)
               videoCua2Ref.current.play()
               }} onMouseLeave={()=> {
                 setArribaCua2(false)
                  videoCua2Ref.current.pause()
                }} className={arribaCua2 ? "contVideoCua margin20" : "contVideoCua"}>
             <div className={arribaCua2 ? "sombraVidCua sombraVidOp" : "sombraVidCua"}></div>
              <div className={arribaCua2 ? "contTituloDivCua cTDOp" : "contTituloDivCua"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoCua2}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoCua2}</p>
              </div>
              <div className='contSvgCua'>
                <a href="https://www.behance.net/gallery/153733819/Motion-Graphics-Explicativo-para-Flay-Logistica" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidCua" ref={videoCua2Ref}>
              <source src={videoCua2} type="video/mp4" />
             </video>
            </div>

            <div onMouseEnter={() => {
               setArribaCua3(true)
               videoCua3Ref.current.play()
               }} onMouseLeave={()=> {
                 setArribaCua3(false)
                  videoCua3Ref.current.pause()
                }} className={arribaCua3 ? "contVideoCua margin20" : "contVideoCua"}>
             <div className={arribaCua3 ? "sombraVidCua sombraVidOp" : "sombraVidCua"}></div>
              <div className={arribaCua3 ? "contTituloDivCua cTDOp" : "contTituloDivCua"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoCua3}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoCua3}</p>
              </div>
              <div className='contSvgCua'>
                <a href="https://www.behance.net/gallery/155030981/Video-Ads-para-Redes-Sociales-de-HIGH-FITNESS" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidCua" ref={videoCua3Ref}>
              <source src={videoCua3} type="video/mp4" />
             </video>
            </div>
          </div>
        </div>
        <div className='contTodosLosVideos2'>
            <div onMouseEnter={() => {
                setArribaHor(true)
                  videoHorRefMob.current.play()
                    }} onMouseLeave={()=> {
                        setArribaHor(false)
                        videoHorRefMob.current.pause()
                    }} className={arribaHor ? "contVideoHor margin20" : "contVideoHor"}>
                  <div className={arribaHor ? "sombraVid sombraVidOp" : "sombraVid"}></div>
                    <div className={arribaHor ? "contTituloDiv cTDOp" : "contTituloDiv"}>
                      <h2 className='tituloVid'>{idioma?.leng.tituloVideoHor}</h2>
                      <p className='parrafoVid'>{idioma?.leng.descVideoHor}</p>
                    </div>
                  <div className='contSvg'>
                  <a href="https://www.behance.net/gallery/167008277/L-A-Estudio-Juridico-Motion-Graphics-Descriptivo" target='_blank' rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                      <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                    </svg>
                  </a>
                </div>
                <video loop muted className="vidHor" ref={videoHorRefMob}>
                  <source src={videoHor} type="video/mp4" />
                </video>
              </div>
                <div className='contVideoMobile'>
                  <div className='contVidMobile1'>
                      <div onMouseEnter={() => {
                        setArribaVer(true)
                        videoVer1RefMob.current.play()
                      }} onMouseLeave={()=> {
                      setArribaVer(false)
                      videoVer1RefMob.current.pause()
                      }} className={arribaVer ? "contVideoVer margin20" : "contVideoVer"}>
                    <div className={arribaVer ? "sombraVidVer sombraVidOp" : "sombraVidVer"}></div>
                  <div className={arribaVer ? "contTituloDivVer cTDOp" : "contTituloDivVer"}>
                    <h2 className='tituloVid'>{idioma?.leng.tituloVideoVer1}</h2>
                  <p className='parrafoVid'>{idioma?.leng.descVideoVer1}</p>
                  </div>
                  <div className='contSvgVer'>
               <a href="https://www.behance.net/gallery/163332893/Video-ADS-Publicitario-CARA-LOREN-ACTIVE-" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                   <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                  </svg>
               </a>
              </div>
             <video loop muted className="vidVer" ref={videoVer1RefMob}>
                <source src={videoVer1} type="video/mp4" />
             </video>
            </div>
                    <div onMouseEnter={() => {
               setArribaCua3(true)
               videoCua3RefMob.current.play()
               }} onMouseLeave={()=> {
                 setArribaCua3(false)
                  videoCua3RefMob.current.pause()
                }} className={arribaCua3 ? "contVideoCua margin20" : "contVideoCua"}>
             <div className={arribaCua3 ? "sombraVidCua sombraVidOp" : "sombraVidCua"}></div>
              <div className={arribaCua3 ? "contTituloDivCua cTDOp" : "contTituloDivCua"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoCua3}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoCua3}</p>
              </div>
              <div className='contSvgCua'>
                <a href="https://www.behance.net/gallery/155030981/Video-Ads-para-Redes-Sociales-de-HIGH-FITNESS" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidCua" ref={videoCua3RefMob}>
              <source src={videoCua3} type="video/mp4" />
             </video>
            </div>
                  </div>
                  <div className='contVidMobile2'>
                    <div onMouseEnter={() => {
               setArribaCua1(true)
               videoCua1RefMob.current.play()
               }} onMouseLeave={()=> {
                 setArribaCua1(false)
                  videoCua1RefMob.current.pause()
                }} className={arribaCua1 ? "contVideoCua margin20" : "contVideoCua"}>
             <div className={arribaCua1 ? "sombraVidCua sombraVidOp" : "sombraVidCua"}></div>
              <div className={arribaCua1 ? "contTituloDivCua cTDOp" : "contTituloDivCua"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoCua1}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoCua1}</p>
              </div>
              <div className='contSvgCua'>
                <a href="https://www.behance.net/gallery/162950147/Video-Ads-Publicitario-de-EVORA" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidCua" ref={videoCua1RefMob}>
              <source src={videoCua1} type="video/mp4" />
             </video>
            </div>
                    <div onMouseEnter={() => {
               setArribaCua2(true)
               videoCua2RefMob.current.play()
               }} onMouseLeave={()=> {
                 setArribaCua2(false)
                  videoCua2RefMob.current.pause()
                }} className={arribaCua2 ? "contVideoCua margin20" : "contVideoCua"}>
             <div className={arribaCua2 ? "sombraVidCua sombraVidOp" : "sombraVidCua"}></div>
              <div className={arribaCua2 ? "contTituloDivCua cTDOp" : "contTituloDivCua"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoCua2}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoCua2}</p>
              </div>
              <div className='contSvgCua'>
                <a href="https://www.behance.net/gallery/153733819/Motion-Graphics-Explicativo-para-Flay-Logistica" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidCua" ref={videoCua2RefMob}>
              <source src={videoCua2} type="video/mp4" />
             </video>
            </div>
                    <div onMouseEnter={() => {
               setArribaVer2(true)
               videoVer2RefMob.current.play()
               }} onMouseLeave={()=> {
                 setArribaVer2(false)
                  videoVer2RefMob.current.pause()
                }} className={arribaVer2 ? "contVideoVer margin20" : "contVideoVer"}>
             <div className={arribaVer2 ? "sombraVidVer sombraVidOp" : "sombraVidVer"}></div>
              <div className={arribaVer2 ? "contTituloDivVer cTDOp" : "contTituloDivVer"}>
                <h2 className='tituloVid'>{idioma?.leng.tituloVideoVer2}</h2>
                <p className='parrafoVid'>{idioma?.leng.descVideoVer2}</p>
              </div>
              <div className='contSvgVer'>
                <a href="https://www.behance.net/gallery/154028419/Campanas-Publicitacias-en-Redes-Sociales-CycleTown" target='_blank' rel='noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgPortfolioLink'>
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="#EAEBED"/>
                 </svg>
                </a>
              </div>
              <video loop muted className="vidVer" ref={videoVer2RefMob}>
              <source src={videoVer2} type="video/mp4" />
             </video>
            </div>
            </div>
          </div>
        </div>
        <VectorPortAbajo />
      </div>
    </section>
  );
}

export default Portfolio