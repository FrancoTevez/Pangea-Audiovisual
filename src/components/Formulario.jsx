import { useEffect, useRef, useState } from "react";
import '../styles/formulario.css'
//import paises from "../paises.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Formulario() {
    const [yaEnvio, setYaEnvio] = useState(0);
    const form = useRef();
    const textAreaRef = useRef(null)
    const nombreRef = useRef(null)
    const mailRef = useRef(null)
    //const paisRef = useRef(null)
    const empresaRef = useRef(null)
    //const nosotrosRef = useRef(null)
    //const scrollPais = useRef(null)
    const [val, setVal] = useState("")
    //const [paisVal, setPaisVal] = useState(false)
    const [campOb, setCampOb] = useState({
      user_name:"",
      user_email:"",
      empresa: "",
      message: ""
    })

    const handleOb = (e) => {
      const {name, value} = e.target

      setCampOb({
        ...campOb,
        [name]: value
      })
    }

    /*const handleClick = (item) => {
      setCampOb({
        ...campOb,
        pais: item
      })
      setPaisVal(false)
    }*/

    const handleChange = (e) => {
      setVal(e.target.value)
    }

    /*const handleNombre = (e) => {
      setCampOb({
        ...campOb,
        pais: e.target.value
      })
      scrollPais.current.scrollTop = 0
      setPaisVal(true)
    }*/

    useEffect(() => {
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }, [val])
    
    const notifyS = () => {
      toast('✔️ Mensaje enviado correctamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    };

    const sendEmail = (e) => {
      e.preventDefault();
      if(mailRef.current.value != "" && nombreRef.current.value != "" && textAreaRef.current.value != ""){
        const formEle = document.querySelector(".formContacto");
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbzJb4IvUSSLS2u9cXPCw04ZZ_czQYGdDzl2t9Vun6aVT3iYW6aioKhfLSUcJLawlvt3/exec", {
          method: "POST",
          body: formData
        })
        setYaEnvio(0)
          notifyS()
          textAreaRef.current.value = ""
          setVal("")
          empresaRef.current.value = ""
          //nosotrosRef.current.value = ""
          mailRef.current.value = ""
          //paisRef.current.value = ""
          nombreRef.current.value = ""
          setCampOb({
            user_name:"",
            user_email:"",
            empresa: "",
            message: ""
          })
      }else{
        setYaEnvio(1)
      }
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className="formContacto" >
        <label htmlFor="nombre">Nombre completo *</label>
        <input type="text" name="user_name" id="nombre" ref={nombreRef} className={`${yaEnvio == 1 ? campOb.user_name == "" ? "obligatorio" : undefined : undefined}`} onChange={(e) => handleOb(e)} />
        <span className={`${yaEnvio == 1 ? campOb.user_name != "" ? "displayNone" : "TextoCampoOb" : "displayNone"}`}>Este campo es obligatorio.</span>
        <label htmlFor="idMail">Mail *</label>
        <input type="email" name="user_email" id="idMail" ref={mailRef} className={`${yaEnvio == 1 ? campOb.user_email == "" ? "obligatorio" : undefined : undefined}`} onChange={(e) => handleOb(e)} />
        <span className={`${yaEnvio == 1 ? campOb.user_email != "" ? "displayNone" : "TextoCampoOb" : "displayNone"}`}>Este campo es obligatorio.</span>
        <label htmlFor="idEmpresa">Empresa</label>
        <input type="text" name="empresa" id="idEmpresa" ref={empresaRef} />
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea id="mensaje" name="message" ref={textAreaRef} className={`${yaEnvio == 1 ? campOb.message == "" ? "obligatorio" : undefined : undefined}`} value={val} onChange={(e) => {
           handleChange(e)
           handleOb(e)
        }} />
        <span className={`${yaEnvio == 1 ? campOb.message != "" ? "displayNone" : "TextoCampoOb" : "displayNone"}`}>Este campo es obligatorio.</span>
        <div className="contInputEnviar">
          <button type="submit" value="ENVIAR" className="inputEnviar">ENVIAR</button>
        </div>
        <ToastContainer />
      </form>
    );
}

export default Formulario