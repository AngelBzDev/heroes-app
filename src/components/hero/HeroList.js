import React, { useMemo } from 'react'
import getHeroByPublisher from '../../helpers/getHeroByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({publisher}) => {
   
   const heroes = useMemo( () => getHeroByPublisher(publisher), [publisher])

   return (
      <div className='heroes-container'>
         {
            heroes.map(hero => <HeroCard key={hero.superhero} {...hero}/>)
         }         
      </div>
   )
}

export default HeroList
