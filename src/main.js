// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PageHeader from './components/layout/PageHeader'
import PageMain from './components/layout/PageMain'
import PageFooter from './components/layout/PageFooter'

Vue.config.productionTip = false

Vue.component('page-header', PageHeader)
Vue.component('page-main', PageMain)
Vue.component('page-footer', PageFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
