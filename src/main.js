import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import apolloProvider from '@/apollo/apolloProvider'
import './registerServiceWorker'
import '@components/_globals'
import i18n from './i18n'

Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  apolloProvider,
  i18n,
  render: h => h(App)
}).$mount('#app')

// Faz com que os testes falhem quando o Vue emitir um erro
if (window.Cypress) {
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
  window.__app__ = app
}

export default { app, router, store }
