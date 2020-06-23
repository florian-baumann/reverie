import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Auth from "../views/Auth.vue"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: "Hello",
    component: Hello
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,     // ???
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if user is not logged in and trying to access a restricted page
  const publicPages = ['/auth', '/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/auth')
  }

  next()
})

export default router
