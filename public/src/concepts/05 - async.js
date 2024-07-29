import { heroes } from "./heroes";

/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncComponent= (element) => {
    const id = '5d86371fd55e2e2a30fe1ccb2  ';
    console.log('Inicio de componente');
    (findHero(id))
    .then(name => element.innerHTML = name )
    .catch(error => element.innerHTML = error);
    console.log('Fin de componente');
};

/**
 * 
 * @param {String} id 
 * @returns  {Promise<String>}
 */
const findHero =   async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) 
        
    throw `Heroe with id ${id} not found`;
    return hero?.name;
}