import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import emailjs from '@emailjs/browser';
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../context/ApiContext";
import mailOk from '../../assets/Hands Mail.png'
import { AiOutlineClose } from "react-icons/ai";

const RemindPassword = (modal) => {

    const {usuarios} = useContext(LoginContext)
    const [values, setValues] =useState({
        email: "",
        codId: "",
        newPassword : "",
        newPasswordRepit : "",
    })

    const [errorEmail, setErrorEmail] =useState('')
    const [errorCodId, setErrorCodId] =useState('')
    const [errorNewPass, setErrorNewPass] =useState('')
    const [errorNewPassRepit, setErrorNewPassRepit] =useState('')
    

    const [modals, setModals] = useState({
        remind: true,
        newPass: false,
        newPassOk: false
    })

    const match = usuarios.find(user => user.email === values.email)

    const handledInputChange = (e) => {
        setValues ({
                ...values,
                [e.target.name] : e.target.value
            })

        e.target.name === "email" && setErrorEmail('')
        e.target.name === "codId" && setErrorCodId('')
        e.target.name === "newPassword" && setErrorNewPass('')
        e.target.name === "newPasswordRepit" && setErrorNewPassRepit('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(modals.remind===true){
            if(match){
                const data = {
                    nombre: match.id, 
                    contrasena: "",
                    toMail: match.email
                }
                emailjs.send('service_rkbguuj', 'template_7y8c547', data, "EtNdfQu1yjfSB4fDT")

                setModals({
                    remind: false,
                    newPass: true,
                    newPassOk: false
                })  
            } else{
                values.email === '' ? setErrorEmail("Ingrese un email") : setErrorEmail("Este correo no pertenece a ningún usuario") 
            }
        }

        if(modals.newPass===true){
            if(match.id === values.codId){
                if(values.newPassword.length <= 9){
                    setErrorNewPass("Tu contraseña debe tener mínimo 10 caracteres.")
                } 
                if(values.newPassword === ""){
                    setErrorNewPass("Ingresar una contraseña.")
                } 
        
                if(values.newPasswordRepit === ""){
                    setErrorNewPassRepit('Repetir la contraseña.')
                } 
                if(values.newPassword !== values.newPasswordRepit){
                    setErrorNewPassRepit('Tus contraseñas no coinciden.')
                } 

                if(values.newPassword.length > 9 && values.newPassword !== "" && values.newPasswordRepit !== "" && values.newPassword === values.newPasswordRepit){
                    const usuarioRef = doc(db, 'usuarios', match.id);
                    updateDoc(usuarioRef, { password: values.newPassword });

                    const data = {
                        nombre: match.email, 
                        contrasena: match.password,
                        toMail: match.email
                    }
            
                    emailjs.send('service_rkbguuj', 'template_7y8c547', data, "EtNdfQu1yjfSB4fDT")

                    setModals({
                        remind: false,
                        newPass: false,
                        newPassOk: true
                    }) 
                }

            } else{
                setErrorCodId("El código ID enviado no es correcto")
            }
        }
    }


  return (
    <div className='modalRemind font-roboto-cond'> 
        {
            modals.remind===true &&
            <div className='modalRemindContainer'>
                <AiOutlineClose className='iconCloseModal' />
                <h1>¿Olvidaste tu contraseña?</h1>
                <p>No te preocupes, ingresa tu email con el que ingresas a tu cuenta y nosotros te mandaremos un correo con las instrucciones para recuperarla.</p>
                <form onSubmit={handleSubmit}>
                    <div className='input-labels'>
                        { 
                            values.email &&
                            <label className='labelInput' for='email'>Ingresa tu email</label>
                        }
                        <input 
                            type="email" 
                            name='email'
                            value={values.email}
                            onChange={handledInputChange}
                            placeholder = "Ingresa tu email"
                            className={`${errorEmail ? "input-error" : ""}`}
                        />
                        {
                            errorEmail &&
                            <label className='error' for='email'> {errorEmail}</label>
                        }
                    </div>
                    <button className='blue-button'>Recuperar contraseña</button>
                </form>
            </div>
        }
        {
            modals.newPass===true &&
            <div className='modalNewPassContainer'>
                <AiOutlineClose className='iconCloseModal' />
                <h1>Crea una nueva contraseña</h1>
                <h4>¿No te llegó el correo? <Link onClick={handleSubmit} className='link'>Haz click aquí para reenviar.</Link></h4>
                <p>Tu nueva contraseña debe ser distinta a tus contraseñas anteriores.</p>
                <form onSubmit={handleSubmit}>
                    <div className='input-labels'>
                        { 
                            values.codId &&
                            <label className='labelInput' for='email'>Ingresa el código ID enviado a tu correo</label>
                        }
                        <input 
                            type="text" 
                            name='codId'
                            value={values.codId}
                            onChange={handledInputChange}
                            placeholder = "Código ID"
                            className={`${errorCodId ? "input-error" : ""}`}
                        />
                        {
                            errorCodId &&
                            <label className='error'> {errorCodId}</label>
                        }
                    </div>
                    <div className='input-labels'>
                        { 
                            values.newPassword &&
                            <label className='labelInput' for='email'>Crea una nueva contraseña</label>
                        }
                        <input 
                            type="password" 
                            name='newPassword'
                            value={values.newPassword}
                            onChange={handledInputChange}
                            placeholder = "Crea una nueva contraseña"
                            className={`${errorNewPass ? "input-error" : ""}`}
                        />
                        {
                            errorNewPass &&
                            <label className='error' for='email'> {errorNewPass}</label>
                        }
                    </div>
                    <div className='input-labels'>
                        { 
                            values.newPasswordRepit&&
                            <label className='labelInput' for='email'>Repite tu nueva contraseña</label>
                        }
                        <input 
                            type="password" 
                            name='newPasswordRepit'
                            value={values.newPasswordRepit}
                            onChange={handledInputChange}
                            placeholder = "Repite tu nueva contraseña"
                            className={`${errorNewPassRepit ? "input-error" : ""}`}
                        />
                        {
                            errorNewPassRepit &&
                            <label className='error' for='email'> {errorNewPassRepit}</label>
                        }
                    </div>

                    <button className='blue-button'>Crear nueva contraseña</button>
                </form>
            </div>
        }
        {
            modals.newPassOk===true &&
            <div className='modalNewPassOkContainer'>
                <AiOutlineClose className='iconCloseModal' />
                <img src={mailOk} alt="" />
                <h1>¡Tu contraseña fue creada con éxito!</h1>
                <p>En unos minutos te mandaremos una confirmación por correo. Cierra ésta pestaña para ingresar a tu cuenta.</p>
            </div>
        }
    </div>
  )
}

export default RemindPassword