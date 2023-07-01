// Global vue component
Vue.component('my-first-component', {
  template: `<div> From the first component {{message}} </div>`,
  // Data should always be a function
  // that returns object
  data() {
    return {
      message: 'Hello',
    }
  },
})

new Vue({
  // options object
  el: '#app',
  template: `<div><my-first-component />
  <my-first-component />
  </div>`,
})
