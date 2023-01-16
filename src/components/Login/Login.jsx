import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

const Login = () => {
  return (
    <div className='login d-flex-row font-roboto-cond black'>
        <AiOutlinePlus className='iconClosed'/>
        <div className='textLogin'>
            <div className='textLoginInt'>
                <h2 className='h2-login'>¡Te damos la bienvenida!</h2>
                <p className='font-w-400'>Ingresa a tu cuenta y disfruta de la experiencia completa de nuestro sitio web.</p>
                <form action="" className='formLogin'>
                    <input
                        name='email'
                        // type={text}                       
                        className='input-forms'
                        placeholder='Ingresa tu email'
                    />
                    <input
                        name='password'
                        // type={text}                       
                        className='input-forms'
                        placeholder='Ingresa tu contraseña'
                    />
                    <button className='white-button'>
                        Inicia Sesión
                    </button>
                    <br />
                    <div className='d-flex-row divCheckbox-login'>
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
                        <p><a className='principal-color' href="">Registrate aquí</a></p>
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