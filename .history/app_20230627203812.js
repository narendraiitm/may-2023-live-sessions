new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    <h1 v-if = "present"> 
        <h2 v-if="nPresent">{{blog.author}}</h2>
    </h1>
    <h3 v-else> Author not found </h3>
    <h1> {{blog.title}}</h1>
  </div>
  `,
  data: {
    blog: { author: 'Narendra', title: 'Live Session' },
    present: true,
    nPresent: false,
  },
})
