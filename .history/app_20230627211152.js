new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    Count:{{count}}
    <ul>
       <li v-for='blog in blogs'> 
        <div>Author: {{blog.author}}</div>
        <div>Title: {{blog.title}}</div>
       </li>
    </ul>
    <button @click = 'increeseCount'>Click Me</button>
  </div>
  `,
  data: {
    blogs: [
      { author: 'Narendra', title: 'Live Session' },
      { author: 'Narendra 2', title: 'Live Session 2' },
    ],
    count: 1,
    a: 1,
    b: 2,
  },
  methods: {
    increeseCount() {
      this.count += 1
    },
  },
  computed: {
    sum() {
      return this.a + this.b
    },
  },
})
