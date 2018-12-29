import Vue from "vue"
import Router from "vue-router"

import jggIndex from "@/components/jggIndex"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "jggIndex",
      meta: {
        title: "九宫格"
      },
      component: jggIndex
    }
  ]
})
