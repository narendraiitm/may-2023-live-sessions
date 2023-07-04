import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import EventsDemo from './components/EventsDemo.js'

new Vue({
  // options object
  el: '#app',
  template: `<div>
  <Header navlinks='Login' />
  <Header navlinks='Logout' />
  <Main />
  <Footer />
  <div style="color: red">{{message}}</div>
  <EventsDemo @sendmessage='handleMessage'></EventsDemo>
  </div>`,
  components: {
    Header,
    Main,
    Footer,
    EventsDemo,
  },
  methods: {
    handleMessage(message, message2) {
      console.log(message)
      console.log(message2)
    },
  },

  data: {
    message: 'hello from parent',
  },
})
