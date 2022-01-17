import {types} from '../types/types'
//Esto es un reducer (un reducer es una simple funcion)

/* Asi se veria el action.payload
   const action = {
      name: 'Angel'
   }  
      o
   const action = {
      type: types.login,
      payload: {
         name: 'Angel'
      }
   }
*/

/**
 * @param {void} state estado 
 * @param {void} action modifica el estado
 */
const authReducer = (state = {}, action) => {
   switch (action.type){
      case types.login: 
         return{            
            logged: true
         }
      case types.logout:
         return{
            logged: false
         }
      default:
         return state
   }
}

export default authReducer