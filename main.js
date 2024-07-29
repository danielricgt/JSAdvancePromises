import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { asyncAwaitComponent } from './public/src/concepts/06-async-await'
import { asyncAwait2Component } from './public/src/concepts/07-aync-awaitRace'
import { forAwaitComponent } from './public/src/concepts/08-for-await'
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>
  </div>
`
const element = document.querySelector('.card');
// environmentsComponent(element);
// callbacksComponent(element);
// promiseComponent(element)
// asyncComponent(element); 
// asyncAwait2Component(element);
forAwaitComponent(element);
