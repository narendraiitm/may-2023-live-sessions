// Local vue component
const localComp = {
  template: `<div>{{message}}</div>`,
  data() {
    return {
      message: 'Hello from Local Component',
    }
  },
}

new Vue({
  // options object
  el: '#app',
  template: `<div><local-comp /></div>`,
  components: {
    'local-comp': localComp,
  },
})
