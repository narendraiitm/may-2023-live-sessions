new Vue({
  // options object
  el: '#app',
  template: `<h1> {{blog.author}}</h1>`,
  data: {
    blog: { author: 'Narendra', title: 'Live Session' },
  },
})
