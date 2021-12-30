import React from 'react'
import getHeroByPublisher from '../../helpers/getHeroByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({publisher}) => {
   
   const heroes = getHeroByPublisher(publisher)

   return (
      <div className='heroes-container'>
         {
            heroes.map(hero => <HeroCard key={hero.superhero} {...hero}/>)
         }         
      </div>
   )
}

export default HeroList
