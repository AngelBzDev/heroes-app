import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({id, superhero}) => {
   
   return (
      <Link to={`/hero/${id}`} >
         <div className='hero-card'>
            <img src={`/assets/img/${id}.jpg`} alt={superhero} className='hero-card__img'/>
            <div>
               <p className='name'>{superhero}</p>
            </div>
         </div>
      </Link>
   )
}

export default HeroCard