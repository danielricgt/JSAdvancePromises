import { heroes } from "./heroes";

/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncComponent= (element) => {
    const id = '5d86371fd55e2e2a30fe1ccb2';
    (findHero(id)).then(heroName => element.innerHTML = heroName)
    .catch(error => element.innerHTML = error)
};

/**
 * 
 * @param {String} id 
 * @returns  {Promise<String>}
 */
const findHero =   async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    return hero?.name;
}