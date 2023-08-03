import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Dashbord from './components/Dashbord.js'
import User from './components/User.js'
import Error from './components/Error.js'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        n: Navbar,
        default: Home,
      },
    },
    { path: '/profiles/:id', component: Profile, props: true, name: 'profile' },
    { path: '/login', component: Login },
    { path: '/navbar', component: Navbar },
    {
      path: '/user/:id',
      component: User,
      children: [
        { path: '', component: Dashbord },
        { path: 'dashboard', component: Dashbord },
        { path: 'profile', component: Profile },
        { path: '*', component: Error },
      ],
    },
    { path: '*', component: Error },
  ],
})

new Vue({
  el: '#app',
  template: `<div>
      <router-link to="/"> Home </router-link>
      <router-link to="/profile/2"> Profile </router-link>
      <router-view></router-view>
      <router-view name='n'></router-view>
      </div>`,
  router,
  components: { home: Home },
})
