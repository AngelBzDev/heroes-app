import React from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreen = () => {
   return (
      <div>
         <h1 className='title-publisher'>Marvel</h1>
         <HeroList publisher={ 'Marvel Comics' }/>
      </div>
   )
}

export default MarvelScreen
