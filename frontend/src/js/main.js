import '../scss/main.scss'

import {createApp, markRaw} from 'vue'
import {createPinia} from 'pinia'
import {createRouter, createWebHashHistory} from 'vue-router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import App from './components/App.vue'
import Home from './components/home/Home.vue'

// inject axios in evers store
// https://pinia.vuejs.org/core-concepts/plugins.html#adding-new-external-properties
const pinia = createPinia()

// ROUTES
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// loads the Icon plugin
UIkit.use(Icons)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
