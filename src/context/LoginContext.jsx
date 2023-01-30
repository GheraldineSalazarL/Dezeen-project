import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const LoginContext = createContext()

const usuarios = [
    { 
        email:'abc@abc.com',
        password: 'coder'
    },
    { 
        email:'abc1@abc.com',
        password: 'coder'
    }
]

export const LoginProvider = ({children}) => {

    const loginStorage = JSON.parse(localStorage.getItem('logeo')) || 
    [{
        user : '',
        logged:false,
        msjPassword:'',
        msjUser:''
    }]

    const [user, setUser] = useState(loginStorage)
    
    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match){
            if(match.password === values.password){
                setUser({
                    user: match.email,
                    logged: true
                })
            }else{
                setUser({
                    msjPassword:'tu contraseña es incorrecta'
                })
            }
        }else{
            setUser({
                msjUser:'no podemos encontrar este correo'
            })
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
        
    }

    useEffect(() => {
        localStorage.setItem('logeo', JSON.stringify(user))
    },[user])

    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}