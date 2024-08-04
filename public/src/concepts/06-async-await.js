import { heroes } from "./heroes";

/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371fd55e2e2a30fe1cc3'; 
    const id2 = '5d86371fd55e2e2a30fecc4';
    try {
        const { name: antMan } = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML = `${hero2.name} / ${antMan}`;
    } catch (error) {
        console.error('Caught error:', error);
        element.innerHTML = error.message;
    }   
};

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw new Error(`Hero with id ${id} not found`);
    return hero;
}