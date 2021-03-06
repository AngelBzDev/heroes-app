import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm'

import getHeroByName from '../../helpers/getHeroByName'

import HeroCard from '../hero/HeroCard'
//libreria que ayuda en el manejo de la ruta
import queryString from 'query-string'

import 'animate.css'


const SearchScreen = () => {

   //Usamos el hook useNavigate para acceder a la ruta
   const navigate = useNavigate()
   //El hook location retorna la ruta actual
   const location = useLocation()
   //Desestructuramos hero usando queryString.parse y de argumento se le pasa location.search
   const { hero = '' } = queryString.parse(location.search)


   const [values, handleInputChange] = useForm({
      //Para que el input siga teniendo el valor del query la propiedad searchHero le cambiamos el valor a hero
      searchHero: hero
   })

   const { searchHero } = values
   
   const heroesFilter = useMemo(() => getHeroByName(hero), [hero]) 

   const handleSearch = (e) => {
      e.preventDefault()
      //al navigate le mandamos como parametro un query
      navigate(`?hero=${ searchHero }`)
   }
   
   return (
      <div>
         <h1 className='title-publisher'>Search Hero</h1>
         <form 
            className='searchbar__container'
            onSubmit={ handleSearch }
         >
            <input
               type='text' 
               name='searchHero' 
               placeholder='Search Hero' 
               autoComplete='off' 
               className='search-bar'
               value={ searchHero }
               onChange={ handleInputChange }        
            />
            <button 
               type='submit' 
               className='btn btn__search'               
            >
               Search
            </button>
         </form>
            {
               (hero === '')
                  ? <p className='msj animate__animated animate__headShake'>Here is the results</p>
                  : (heroesFilter.length === 0) && <p className='msj animate__animated animate__headShake'>No results found: { hero }</p>
            }
         <div className='heroes-container animate__animated animate__headShake'>

            {
               heroesFilter.map(hero => <HeroCard key={hero.superhero} {...hero}/>)
            }
         </div>
      </div>
   )
}

export default SearchScreen
