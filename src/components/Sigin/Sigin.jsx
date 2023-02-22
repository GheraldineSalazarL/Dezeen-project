import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import imgSigin from '../../assets/login-1.png'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../context/ApiContext';
import { LoginContext } from '../../context/LoginContext';
import imgModal from '../../assets/confirm.png'
import { BsCheck2 } from 'react-icons/bs';
import { VscClose } from "react-icons/vsc";



const Sigin = () => {

    const {usuarios} = useContext(LoginContext)
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: '',
        rePassword: '',
    })
    const [check, setCheck] = useState(true)
    const [msjEmail, setMsjEmail] = useState('')
    const [msjPass1, setMsjPass1] = useState('')
    const [msjPass2, setMsjPass2] = useState('')

    const handleInputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name] : e.target.value,
        })

        e.target.name === "email" && setMsjEmail('')
        e.target.name === "password" && setMsjPass1('')
        e.target.name === "rePassword" && setMsjPass2('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(usuarios.find(user => user.email === values.email)){
            setMsjEmail("Este correo ya pertenece a un usuario.")
            return
        }
        if(values.email === ""){
            setMsjEmail("Ingresar un email")
        }

        if(values.password.length <= 9){
            setMsjPass1("Tu contraseña debe tener mínimo 10 caracteres.")
        } 
        if(values.password === ""){
            setMsjPass1("Ingresar una contraseña.")
        } 

        if(values.rePassword === ""){
            setMsjPass2('Repetir la contraseña.')
        } 
        if(values.password !== values.rePassword){
            setMsjPass2('Tus contraseñas no coinciden.')
        } 

        if(values.email !== "" && values.password.length > 9 && values.password !== "" && values.rePassword !== "" && values.password === values.rePassword && check===true){
            const dataFB = {
                email: values.email,
                password: values.password
            }
            const usuariosRef = collection(db, 'usuarios')
            addDoc(usuariosRef, dataFB)
                .then((doc) =>{
                    const data = {
                        nombre: values.email, 
                        contrasena: values.password,
                        toMail: values.email
                    }
            
                    emailjs.send('service_rkbguuj', 'template_7y8c547', data, "EtNdfQu1yjfSB4fDT")

                    Swal.fire({
                        title: 'Usuario creado',
                        width: 846,
                        text: 'Hemos enviado un email con tu usuario y contraseña',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        confirmButtonText: 'Iniciar sesión',
                        customClass: {
                            confirmButton: 'custom-button',
                            popup: 'custom-popup-sigin'
                        },
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                navigate(`/login`);
                            } 
                        })
            })
            setValues({
                email: '',
                password: '',
                rePassword: ''
            })
        }
    }

  return (
    <div className='login d-flex-row font-roboto-cond black'>
        <NavLink to='/'><AiOutlinePlus className='iconClosedSigin'/></NavLink>
        <div className='imgLogin'>
            <img src={imgSigin} alt="" width="100%" height="100%"/>
        </div>
        <div className='textLogin'>
            <div className='textLoginInt'>
                <h2 className='h2-sigin'>¡Te damos la bienvenida!</h2>
                <p className='font-w-400'>Regístrate y forma parte de la comunidad más grande de arquitectura en el mundo.</p>
                <form onSubmit={handleSubmit} className='formLogin d-flex-column' action="" >
                    <div className='input-forms d-flex-column'>
                        { 
                            values.email &&
                            <label className='labelInput' for='email'>Ingresa tu email</label>
                        }
                        <div className='inputContent'>
                            <input
                                name='email'
                                type={'email'}                       
                                placeholder='Ingresa tu email'
                                value={values.email}
                                onChange={handleInputChange}
                                className={`${msjEmail ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.email && !msjEmail) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${msjEmail ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                            msjEmail &&
                            <label className='labelError' for='email'>{msjEmail}</label>
                        }
                    </div>

                    <div className='input-forms d-flex-column'>
                        { 
                            values.password &&
                            <label className='labelInput' for='email'>Ingresa tu contraseña</label>
                        }
                        <div className='inputContent'>
                            <input
                                name='password'
                                type={'password'}                       
                                placeholder='Ingresa tu contraseña'
                                value={values.password}
                                onChange={handleInputChange}
                                className={`${msjPass1 ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.password && !msjPass1) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${msjPass1 ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                                msjPass1  &&
                                <label className='labelError' for='email'> {msjPass1}</label>
                        }
                    </div>

                    <div className='input-forms d-flex-column'>
                        { 
                            values.rePassword &&
                            <label className='labelInput' for='email'>Confirma tu contraseña</label>
                        }
                        <div className='inputContent'>
                            <input
                                name='rePassword'
                                type={'password'}                       
                                placeholder='Confirma tu contraseña'
                                value={values.rePassword}
                                onChange={handleInputChange}
                                className={`${msjPass2 ? "input-error" : ""}`}
                            />
                            {
                                <>
                                    <BsCheck2 className={`${(values.rePassword && !msjPass2) ? 'iconVisible' : 'iconOculto'}`}/>
                                    <VscClose className={`${msjPass2 ? 'iconVisible input-error' : 'iconOculto'}`}/>
                                </>
                            }
                        </div>
                        {
                                msjPass2 &&
                                <label className='labelError' for='email'> {msjPass2}</label>
                        }
                    </div>

                    <button className='white-button'>
                        Crear una cuenta
                    </button>
                    <br />

                    <div className='divCheckbox-sigin d-flex-row '>
                        <input 
                            className='checkbox'
                            type="checkbox"
                            name='check'
                            onChange={() => {setCheck(!check)}}
                            value={check}
                            defaultChecked
                        />
                        <label for="terms" className={`${check === true ? 'checkboxLabel' : 'checkboxLabel input-error'}`}>
                            Acepto los <span className='.principal-color'>Términos y Condiciones </span> de nuestra <br /> <span>Política de Privacidad.</span>
                        </label>
                    </div>
                    <div className='finishLogin d-flex-center d-flex-column font-w-400'>
                        <p>¿Ya tienes cuenta?</p>
                        <Link to='/login' className='LinkSigIn principal-color'>Inicia sesión aquí</Link>
                    </div>
                </form>
            </div>
        </div>
            

    </div>
  )
}

export default Sigin