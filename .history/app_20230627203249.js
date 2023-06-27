new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    <h1 v-if = "present"> {{blog.author}}</h1>
    <h1> {{blog.title}}</h1>
  </div>
  `,
  data: {
    blog: { author: 'Narendra', title: 'Live Session' },
    present: true,
  },
})