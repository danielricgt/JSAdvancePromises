import { heroes } from "./heroes";

/**
 *
 * @param {HTMLElement} element
 */
export const generatorFunctionsComponent = (element) => {
  if (!element) {
    throw new Error("Element is required");
  }

  const renderButton = () => {
    const {value} = genId.next();
    button.innerText = `Click ${value}`;
  }
  
  
  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button); 

  button.addEventListener('click', renderButton) ;

  const genId = idGenerator();

}

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield `2023 - ${++currentId}`;
  }
}