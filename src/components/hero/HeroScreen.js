import React from 'react'
import { useParams } from 'react-router-dom'
import getHeroById from '../../helpers/getHeroById'

const HeroScreen = () => {
   
   const {heroId} = useParams()
   const {superhero} = getHeroById(heroId)

   return (
      <div>
         <h1 className='title-publisher'>{superhero}</h1>
      </div>
   )
}

export default HeroScreen
