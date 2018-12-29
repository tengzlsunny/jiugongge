// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import "lib-flexible/flexible"
import "./assets/base.css"
import vueWechatTitle from "vue-wechat-title"
import "./assets/basic.css"
import "vue2-toast/lib/toast.css"
import Toast from "vue2-toast"
import MintUI from 'mint-ui'
import qs from 'qs'

Vue.use(MintUI)

Vue.prototype.qs = qs

Vue.config.productionTip = false

Vue.use(vueWechatTitle)

Vue.use(Toast, {
  defaultType: "center",
  duration: 2000,
  wordWrap: true,
  width: "500px"
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
