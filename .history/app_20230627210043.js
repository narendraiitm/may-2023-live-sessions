new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    <ul>
       <li v-for='blog in blogs'> {{blog.author}}</li>
    </ul>
  </div>
  `,
  data: {
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
