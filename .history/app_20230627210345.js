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
    <buuton>Click Me</button>
  </div>
  `,
  data: {
    blogs: [
      { author: 'Narendra', title: 'Live Session' },
      { author: 'Narendra 2', title: 'Live Session 2' },
    ],
    count: 1,
  },
})
