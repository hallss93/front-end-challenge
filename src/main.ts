import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Resource from 'vue-resource';
import './assets/scss/index.scss'
import VueTabs from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)
Vue.use(Resource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
