// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import { Button,Dialog,Toast,PullRefresh,Field,Cell,CellGroup,AddressEdit } from 'vant'

Vue.use(Button)
.use(Dialog)
.use(Toast)
.use(PullRefresh)
.use(Field)
.use(Cell)
.use(CellGroup)
.use(AddressEdit)
// Vue.use()

// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

axios.defaults.withCredentials = true
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
