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

    const [user, setUser] = useState({
        user : '',
        logged:false,
        msjPassword:'',
        msjUser:''
    })
    
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

    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}