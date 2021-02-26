import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "../views/Auth.vue"
import Home from "../views/Home.vue"
import Values from "../views/Values.vue"
import Idea from "../views/Idea.vue"
import My from "../views/My.vue"
import Contact from "../views/Contact.vue"
import FrontPage from "../views/FrontPage.vue"

import NavBar from "../views/NavBar.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: "FrontPage",
    component: FrontPage
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
    component: NavBar,
    children: [
      {
        path: '',
        component: Home,
        name: "Home"
      },
    ]
  },
  {
    path: "/values",
    component: NavBar,
    children: [
      {
        path: '',
        component: Values,
        name: "Values"
      },
    ]
  },
  {
    path: "/contact",
    component: NavBar,
    children: [
      {
        path: '',
        component: Contact,
        name: "Contact"
      },
    ]
  },
  {
    path: "/idea/:id",
    component: NavBar,
    children: [
      {
        path: '',
        component: Idea,
        name: "Idea"
      },
    ]
  },
  {
    path: "/my",
    component: NavBar,
    children: [
      {
        path: '',
        component: My,
        name: "My"
      },
    ]
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
