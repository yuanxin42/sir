import Vue from 'vue'
import App from './App'
import router from './router'
import sir from 'sirpackages'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(sir)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
