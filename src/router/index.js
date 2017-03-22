/**
 * Created by zzmhot on 2017/3/16.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/16 14:31
 * @Copyright(©) 2017 by zzmhot.
 *
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  name: 'home',
  component: require('pages/home'),
  meta: {
    title: 'WeUI',
    desc: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
  }
}, {
  path: '/button',
  name: 'button',
  component: require('pages/button'),
  meta: {
    title: 'Button',
    desc: '按钮',
  }
}, {
  path: '/icons',
  name: 'icons',
  component: require('pages/icons'),
  meta: {
    title: 'Icon',
    desc: '图标',
  }
}, {
  path: '/grid',
  name: 'grid',
  component: require('pages/grid'),
  meta: {
    title: 'Grid',
    desc: '九宫格',
  }
}, {
  path: '',
  redirect: '/home'
}, {
  path: '*',
  name: 'notPage',
  component: {
    template: '<div>404</div>'
  }
}]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

//路由开始之前的操作
router.beforeEach((to, from, next) => {
  next()
})
//路由完成之后的操作
router.afterEach(route => {
})

export default router;
