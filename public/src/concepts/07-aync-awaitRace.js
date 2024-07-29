/**
 *
 * @param {HTMLElement} element
 */

export const asyncAwait2Component = async (element) => {
  element.innerHTML = "Loading...";

  try {
    console.time('finish');
    // const valor1 = await slowPromise();
    // const valor2 = await mediumPromise();
    // const valor3 = await fastPromise();
    const [valor1, valor2, valor3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    element.innerHTML = `${valor1}/${valor2}/${valor3}`;
    console.timeEnd('finish');
  } catch (error) {
    element.innerHTML = error.message
  }
};

const slowPromise = async () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("slow"), 2000);
  });

const mediumPromise = async () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("medoim"), 1000);
  });

const fastPromise = async () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("fast"), 500);
  });
