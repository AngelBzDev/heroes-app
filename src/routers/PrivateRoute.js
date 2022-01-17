import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import AuthContext from "../auth/authContext"

//Lo que se ejecute aqui lo veran las rutas privadas
//{children}: son los hijos o elementos dentro del componente
const PrivateRoute = ({children}) => {
   
   const {user} = useContext(AuthContext)

   /* Este hook de react-router-dom es para conocer la ruta actual, retorna un objeto {pathname: '/', search: '', hash: '', state: null, key: 'lylrewq2' */
   const {pathname, search} = useLocation()
   
   /* Guarda en localstorage el path actual para despues poder usarlo al iniciar sesion */
   //Se concatena pathname y search ya que recordara tambien la busqueda
   localStorage.setItem('lastPath', pathname + search)

   return user.logged
      ? children
      : <Navigate to='/login'/>
}

export default PrivateRoute
