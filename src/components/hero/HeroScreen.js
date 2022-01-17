import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import getHeroById from '../../helpers/getHeroById'

const HeroScreen = () => {
   
   const navigate = useNavigate()
   const {heroId} = useParams()

   //useMemo se utiliza para memorizar valores y solo se actualiza cuando la dependencia cambia 
   const hero = useMemo( () => getHeroById(heroId), [heroId])
   /* const {superhero, publisher, alter_ego, first_appearance, characters} = !hero  */

   //Si el heroe no existe(es undefined) con el Componente Navigate de react-router-dor nos envia a otra pagina
   if(!hero){
      return <Navigate to='/'/>
   }

   const pathImg = `/assets/img/${hero.id}.jpg`

   const handleReturn = () => {
      //Un -1 significa que navega hacia la pagina anterior
      navigate(-1)
   }

   return (
      <div className=''>
         <h1 className='title-publisher'>{hero.superhero}</h1>
         <div className='info__container'>
            <img src={pathImg} alt={hero.superhero} className='animate__animated animate__headShake'/>
            <div className='info__hero animate__animated animate__headShake'>
               <p>Superhero: <span>{hero.superhero}</span></p>
               <p>Alter Ego: <span>{hero.alter_ego}</span></p>
               <p>First Appearance: <span>{hero.first_appearance}</span></p>
               <p>Characters: <span>{hero.characters}</span></p>
               <button className='btn-return' onClick={ handleReturn }>Return</button>
            </div>
         </div>
      </div>
   )
}

export default HeroScreen
