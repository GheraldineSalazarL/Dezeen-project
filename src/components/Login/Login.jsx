import React, { useContext } from 'react'
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

const Login = () => {

    const {login, user} = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        login({ email, password})
    }

    

  return (
    <div className='login d-flex-row font-roboto-cond black'>
        <NavLink to='/'><AiOutlinePlus className='iconClosed'/></NavLink>
        <div className='textLogin'>
            <div className='textLoginInt'>
                <h2 className='h2-login'>¡Te damos la bienvenida!</h2>
                <p className='font-w-400'>Ingresa a tu cuenta y disfruta de la experiencia completa de nuestro sitio web.</p>
                <form className='formLogin d-flex-column' onSubmit={handleSubmit} action="" >
                    <div className='input-forms d-flex-column'>
                        { 
                            email &&
                            <label className='labelInput' for='email'>Ingresa tu email</label>
                        }
                        <input
                            name='email'
                            type={'email'}                       
                            placeholder='Ingresa tu email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {
                            user.msjUser &&
                            <label className='labelError' for='email'> {user.msjUser}</label>
                        }
                    </div>

                    <div className='input-forms d-flex-column'>
                        { 
                            password &&
                            <label className='labelInput' for='email'>Ingresa tu contraseña</label>
                        }
                        <input
                            name='password'
                            type={'password'}                       
                            placeholder='Ingresa tu contraseña'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {
                            user.msjPassword &&
                            <label className='labelError' for='email'> {user.msjPassword}</label>
                        }
                    </div>

                    <button  className='white-button'>
                        Inicia Sesión
                    </button>
                    <br />

                    <div className='divCheckbox-login d-flex-row '>
                        <div>
                            <input 
                                className='checkbox'
                                type="checkbox"
                                name='terms'
                                id='terms'
                            />
                            <label for="terms" className='checkboxLabel'>
                                Recuérdame
                            </label>
                        </div>
                        <p><a className='principal-color' href="">Olvidé mi contraseña.</a></p>
                    </div>

                    <div className='finishLogin d-flex-center d-flex-column font-w-400'>
                        <p>¿No tienes cuenta?</p>
                        <NavLink to='/sigin' className='LinkSigIn principal-color'>Registrate aquí</NavLink>
                    </div>
                </form>
            </div>
        </div>
        <div className='imgLogin'>
            <img src="../../assets/login-2.png" alt="" width="100%" height="100%"/>
        </div>    

    </div>
  )
}

export default Login