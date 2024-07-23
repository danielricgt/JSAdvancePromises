import { heroes } from "./heroes";
/**
 *
 * @param {HTMLElement} element
 */

export const promiseComponent = (element) => {
    /**
     * 
     * @param {Array<String>} hero 
     */
    const renderHero = (hero) =>{
        element.innerHTML= hero.name;

    }
    const idHeroe = "5d86371fd55e2e2a30fe1cc4"
    findHero(idHeroe)
    .then(myHero => renderHero(myHero));
};
/**
 *
 * @param {String} id
 * @returns {Promise<Object>}  
 */
export const findHero = (id) => {
  return new Promise((resolve, reject) => { 
    const hero = heroes.find((hero) => hero.id === id);
    if (hero) {
      resolve(hero);
      return;
    }
    reject(`Hero with id ${id} not found`);
  }); 
};
