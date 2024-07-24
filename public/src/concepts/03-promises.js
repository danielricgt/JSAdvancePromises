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
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `<h1>${hero1.name}  </h1>
        <h1>${hero2.name}</h1>`;
  };
  const renderError = (error) => {
    element.innerHTML = `
        <h3>
        ${error}
        </h3>`;
  };
  const idHeroe = "5d86371fd55e2e2a30fe1cc4";
  const idheroe2 = "5d86371fd55e2e2a30fe1ccb1";

 Promise.all([
    findHero(idHeroe),
    findHero(idheroe2),
 ])
    .then(([hero1, hero2 ])=> renderTwoHeroes(hero1,hero2))
    .catch(renderError);
    };

//!Forma 2
//   let hero1;
//   findHero(idHeroe)  
//   .then((hero) => {
//     hero1 = hero
//     return findHero(idheroe2);
//     })
//     .then(hero2 => {
//         renderTwoHeroes(hero1, hero2);
//     })
//     .catch(renderError)

//!Forma 1
//   findHero(idHeroe)
//     .then((hero1) => { 
//       findHero(idheroe2)
//         .then((hero2) => {
//           renderTwoHeroes(hero1, hero2);
//         })
//         .catch(renderError);
//     })
//     .catch(renderError);  
// };
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
