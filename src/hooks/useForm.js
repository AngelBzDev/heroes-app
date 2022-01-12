//Hook que guarda los valores de un input en un objeto

import { useState } from "react"

const useForm = (init = {}) => {
   const [values, setValues] = useState(init)

   /**
    * 
    * @param {target} referencia al objeto en el cual se lanzo el evento
    */
   const handleInputChange = ({target}) => {
      setValues({
         //Se usa spreed operator para mantener los valores anteriores
         ...values,
         [target.name]: target.value
      })
   }

   return [
      values, 
      handleInputChange,
   ]
}

export default useForm
