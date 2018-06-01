// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PageHeader from './components/layout/PageHeader'
import PageMain from './components/layout/PageMain'
import PageFooter from './components/layout/PageFooter'
import MarkdownEditor from './components/MarkdownEditor'
// toasted
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.component('page-header', PageHeader)
Vue.component('page-main', PageMain)
Vue.component('page-footer', PageFooter)
Vue.component('editor-markdown', MarkdownEditor)

// toasted
Vue.use(Toasted, {
  // set your iconPack, defaults to material. material|fontawesome
  iconPack: 'material'
})

// options to the toast
let options = {
  type: 'error',
  icon: {
    name: 'info',
    after: false
  },
  duration: 5000,
  position: 'top-right',
  theme: 'bubble'
}

// register the toast with the custom message
Vue.toasted.register('my_app_error',
  (payload) => {
    // if there is no message passed show default message
    if (!payload.message) {
      return 'Oops.. Something Went Wrong..'
    }
    // if there is a message show it with the message
    return 'Oops.. ' + payload.message
  },
  options
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
