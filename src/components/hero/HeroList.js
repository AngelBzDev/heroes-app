import React from 'react'
import getHeroByPublisher from '../../helpers/getHeroByPublisher'

const HeroList = ({publisher}) => {
   
   const heroes = getHeroByPublisher(publisher)

   return (
      <>
         <ul>
            {
               heroes.map(hero => (
                  <li key={ hero.id }>
                     { hero.superhero }
                  </li>
               ))
            }
         </ul>
      </>
   )
}

export default HeroList
