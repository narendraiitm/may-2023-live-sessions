export default {
  template: `<div>  
  <ul>
  <li v-for="task in comptasks">{{task.taskName}}, creator: {{task.creator}}</li>
  </ul>
  </div>`,
  props: ['comptasks'],
}
