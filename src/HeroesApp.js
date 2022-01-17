import { useReducer, useEffect } from "react";
import AuthContext from "./auth/authContext";
import authReducer from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem('auth')) || {logged: false}
}

const HeroesApp = () => {

  //Con este hook se usa el reducer

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if(!user) return
    localStorage.setItem('auth', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{
      //Las props que se enviaran al contexto
      user, dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default HeroesApp;