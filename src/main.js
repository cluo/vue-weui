import Vue from 'vue'
import 'normalize.css'
import 'weui/src/style/base/reset.less'
import 'assets/scss/main.scss'
import router from './router'
import App from './App'
import VueResource from 'vue-resource'
import Plugins from 'plugins'

Vue.use(VueResource)

Vue.use(Plugins)

Vue.config.productionTip = false

new Vue({
  router,
  render: createElement => createElement(App)
}).$mount('mainbody')
