new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    Count:{{count}}
    Sum: {{sum}}
    dummy: {{increeseCount}}
    <ul>
       <li v-for='blog in blogs'> 
        <div>Author: {{blog.author}}</div>
        <div>Title: {{blog.title}}</div>
       </li>
    </ul>
    <button @click = 'increeseCount'>Click Me</button>
    <input v-model='name'></input>
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
    name: null,
  },
  methods: {
    increeseCount() {
      this.b += 2
    },
  },
  computed: {
    sum() {
      return this.a + this.b
    },
  },
  watch: {
    b(newVal, oldVal) {
      const change = newVal - oldVal
      console.log(change)
    },
  },
})
