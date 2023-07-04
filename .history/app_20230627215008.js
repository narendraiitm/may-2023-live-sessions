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
    addBlog() {
      const newBlog = { author: 'Narendra3', title: this.blog }
      this.blogs.push(newBlog)
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
