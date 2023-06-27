new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    <h1 v-if = "present" v-bind:class='{danger:isDanger, success:!isDanger}'> 
        {{blog.author}}
    </h1>
    <h3 v-else> Author not found </h3>
    <h1> {{blog.title}}</h1>
  </div>
  `,
  data: {
    blog: { author: 'Narendra', title: 'Live Session' },
    blogs: [
      { author: 'Narendra', title: 'Live Session' },
      { author: 'Narendra 2', title: 'Live Session 2' },
    ],
    present: true,
    nPresent: false,
    isDanger: true,
    isSuccess: false,
  },
})
