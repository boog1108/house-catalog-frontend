// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

export const host = process.env.VUE_APP_ROOT_API
export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
