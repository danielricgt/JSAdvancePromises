import { heroes } from "./heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371fd55e2e2a30fe1cc4';
    const heroIds = heroes.map(hero => hero.id);
    console.log(heroIds);
    const heroPromises = getHeroesAsync(heroIds);
    for await(const hero of heroPromises){
        element.innerHTML += `${hero.name} <br/>`;
    }
    if (await getHeroAsync(id)) {
      console.log('Si existe el heroe');
      return;
    } 
    element.innerHTML = 'No existe ese heroe';

}


/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find (hero => hero.id === id);
}