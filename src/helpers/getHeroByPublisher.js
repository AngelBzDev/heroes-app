import {heroes} from '../data/heroes'

const getHeroByPublisher = (publisher) => {
   
   const validPublisher = ['DC Comics', 'Marvel Comics']

   //Validar publishe existentes del array de validPublisher
   if(!validPublisher.includes(publisher)){
      throw new Error(`${publisher} no es un publisher valido`)
   }
   
   return heroes.filter(hero => hero.publisher === publisher)
}

export default getHeroByPublisher