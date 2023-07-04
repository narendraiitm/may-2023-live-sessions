import baseTemplate from './components/baseTemlate.js'

new Vue({
  // options object
  el: '#app',
  template: `<div>
  <baseTemplate>
    <template v-slot:header>
       <div> This is header </div>
    </template>
    <div> Some HTML</div>
    <template v-slot:footer>
       <div style='color: red'> This is footer </div>
    </template>
  </baseTemplate>
  </div>`,
  components: {
    baseTemplate,
  },
})
