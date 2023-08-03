import Home from './components/Home.js'
import Login from './components/Login.js'
import Profile from './components/Profile.js'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
  ],
})

new Vue({
  el: '#app',
  template: `<div> Hello from vue app.
  <router-view />
  </div>`,
  router,
})
