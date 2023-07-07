import Home from './components/Home.js'
import Profile from './components/Profile.js'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/profile/:id/name/:name', component: Profile },
  ],
})

new Vue({
  el: '#app',
  template: `<div>
  <router-link to='/'> Home </router-link>
  <router-link to='/profile'> Profile </router-link>
  <router-view></router-view>
  </div>`,
  router,
})
