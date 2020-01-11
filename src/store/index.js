import Vue from 'vue'
import Vuex from 'vuex'
import { isProd } from '@utils/environments'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  },
  // strict: process.env.NODE_ENV !== 'production'
  strict: !isProd()
})
