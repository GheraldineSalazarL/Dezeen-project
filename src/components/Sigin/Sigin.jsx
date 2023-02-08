import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import imgSigin from '../../assets/login-1.png'

const Sigin = () => {
  return (
    <div className='login d-flex-row font-roboto-cond black'>
        <NavLink to='/'><AiOutlinePlus className='iconClosed'/></NavLink>
        <div className='imgLogin'>
            <img src={imgSigin} alt="" width="100%" height="100%"/>
        </div>
        <div className='textLogin'>
            <div className='textLoginInt'>
                <h2 className='h2-sigin'>¡Te damos la bienvenida!</h2>
                <p className='font-w-400'>Regístrate y forma parte de la comunidad más grande de arquitectura en el mundo.</p>
                <form className='formLogin d-flex-column' action="" >
                    <div className='input-forms d-flex-column'>
                        {/* { 
                            email &&
                            <label className='labelInput' for='email'>Ingresa tu email</label>
                        } */}
                        <input
                            name='email'
                            type={'email'}                       
                            placeholder='Ingresa tu email'
                            // value={email}
                            // onChange={handleEmailChange}
                        />
                        {/* {
                            user.msjUser &&
                            <label className='labelError' for='email'> {user.msjUser}</label>
                        } */}
                    </div>

                    <div className='input-forms d-flex-column'>
                        {/* { 
                            password &&
                            <label className='labelInput' for='email'>Ingresa tu contraseña</label>
                        } */}
                        <input
                            name='password'
                            type={'password'}                       
                            placeholder='Ingresa tu contraseña'
                            // value={password}
                            // onChange={handlePasswordChange}
                        />
                        {/* {
                            user.msjPassword &&
                            <label className='labelError' for='email'> {user.msjPassword}</label>
                        } */}
                    </div>

                    <div className='input-forms d-flex-column'>
                        {/* { 
                            password &&
                            <label className='labelInput' for='email'>Ingresa tu contraseña</label>
                        } */}
                        <input
                            name='confirmPassword'
                            type={'password'}                       
                            placeholder='Confirma tu contraseña'
                            // value={password}
                            // onChange={handlePasswordChange}
                        />
                        {/* {
                            user.msjPassword &&
                            <label className='labelError' for='email'> {user.msjPassword}</label>
                        } */}
                    </div>

                    <button className='white-button'>
                        Crear una cuenta
                    </button>
                    <br />

                    <div className='divCheckbox-sigin d-flex-row '>
                        <input 
                            className='checkbox'
                            type="checkbox"
                            name='terms'
                            id='terms'
                        />
                        <label for="terms" className='checkboxLabel'>
                            Acepto los <span className='.principal-color'>Términos y Condiciones </span> de nuestra <br /> <span>Política de Privacidad.</span>
                        </label>
                    </div>
                    <div className='finishLogin d-flex-center d-flex-column font-w-400'>
                        <p>¿Ya tienes cuenta?</p>
                        <NavLink to='/login' className='LinkSigIn principal-color'>Inicia sesión aquí</NavLink>
                    </div>
                </form>
            </div>
        </div>
            

    </div>
  )
}

export default Sigin