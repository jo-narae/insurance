import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueSessionStorage from 'vue-sessionstorage'

Vue.use(Vuetify)
Vue.use(VueSessionStorage)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
