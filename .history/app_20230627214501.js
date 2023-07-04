new Vue({
  // options object
  el: '#app',
  template: `
  <div>
    <ul>
       <li v-for='blog in blogs'> 
        <div>Author: {{blog.author}}</div>
        <div>Title: {{blog.title}}</div>
       </li>
    </ul>
    <input v-model='blog'></input>
    <button @click='addBlog'> Add Blog </button>
    <input v-bind:value='name'></input>
  </div>
  `,
  data: {
    blogs: [
      { author: 'Narendra', title: 'Live Session' },
      { author: 'Narendra 2', title: 'Live Session 2' },
    ],
    blog: null,
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
