import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Auth from "../views/Auth.vue"
import Home from "../views/Home.vue"
import Values from "../views/Values.vue"
import Idea from "../views/Idea.vue"
import My from "../views/My.vue"

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
  {
    path: "/values",
    name: "Values",
    component: Values
  },
  {
    path: "/idea/:id",
    name: "Idea",
    component: Idea
  },
  {
    path: "/my",
    name: "My",
    component: My
  }

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
