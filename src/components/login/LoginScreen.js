import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../auth/authContext'

import {types} from '../../types/types'

const LoginScreen = () => {

   //Con este hook se utiliza el contexto y de argumento se envia el contexto
   //Desetructuramos el dispatch
   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleLogin = () => {
         
      dispatch({type: types.login})
      
      /* Anted de hacer login verificar la ruta anterior para que ingresa de nuevo  */
      const lastPath = localStorage.getItem('lastPath') || '/marvel'

      navigate(lastPath, {
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
