import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Top from './views/Top.vue'
import store from "./store";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: "Login"
      }
    },
    {
      path: '/top',
      name: 'top',
      component: Top,
      meta: {
        title: "Top",
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "About"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
});

// 認証が必要なページ and 未ログイン -> ログインページ
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLogin) {
    next("login");
  } else {
    next();
  }
});

// titleの設定
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
});

export default router;
