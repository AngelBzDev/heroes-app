import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

   const navigate = useNavigate()

   const handleLogin = () => {
      navigate('/', {
         replace: true
      })
   }

   return (
      <div className='container'>
         <h1 className='title'>Bienvenido Guapo</h1>
         <button 
            className='btn btn-login'
            onClick={ handleLogin }
         >
            Login
         </button>
      </div>
   )
}

export default LoginScreen
