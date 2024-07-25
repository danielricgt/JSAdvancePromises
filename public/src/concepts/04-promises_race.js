/**
 *
 * @param {HTMLElement} element
 */

export const promiseRaceComponent = (element) => {
  element.innerHTML ='Loading...';

  const rendervalue = (value) => {
    element.innerHTML = value;
  };
  Promise.race([slowPromess(), mediumPromess(), largePromess()]).then(
    rendervalue
  );
};

const slowPromess = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("slow"), 2000);
  });

const mediumPromess = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("medoim"), 1000);
  });

const largePromess = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("fast"), 1300);
  });
