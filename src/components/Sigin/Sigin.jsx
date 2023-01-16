import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

const Sigin = () => {
  return (
    <div className='login d-flex-row font-roboto-cond black'>
        <AiOutlinePlus className='iconClosed'/>
        <div className='imgLogin'>
            <img src="../../assets/login-1.png" alt="" width="100%" height="100%"/>
        </div>
        <div className='textLogin'>
            <div className='textLoginInt'>
                <h2 className='h2-sigin'>¡Te damos la bienvenida!</h2>
                <p className='font-w-400'>Regístrate y forma parte de la comunidad más grande de arquitectura en el mundo.</p>
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
                    <input
                        name='confirmPassword'
                        // type={text}                       
                        className='input-forms'
                        placeholder='Confirma tu contraseña'
                    />
                    <button className='white-button'>
                        Crear una cuenta
                    </button>
                    <br />
                    <div className='d-flex-row divCheckbox-sigin'>
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
                        <p><a className='principal-color' href="">Inicia sesión aquí</a></p>
                    </div>
                </form>
            </div>
        </div>
            

    </div>
  )
}

export default Sigin