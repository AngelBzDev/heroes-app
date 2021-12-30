import React from 'react'
import HeroList from '../hero/HeroList'

const DcScreen = () => {
   return (
      <div>
         <h1 className='title-publisher'>DC</h1>
         <HeroList publisher={ 'DC Comics' }/>
      </div>
   )
}

export default DcScreen
