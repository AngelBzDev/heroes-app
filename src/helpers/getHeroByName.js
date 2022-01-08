import {heroes} from '../data/heroes'

const getHeroByName = (name = '') => {

   name = name.toLowerCase()

   if(name === ''){
      return []
   }

   return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name))
}

export default getHeroByName
