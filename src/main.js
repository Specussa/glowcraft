import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

const app = createApp(App)

app.use(i18n).use(router).mount('#app')

// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height