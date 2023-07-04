import Sidenav from './Sidenav.js'
import Contents from './Contents.js'

export default {
  template: `<div> 
  <Sidenav item1='test1' item2='test2' />
  <Contents v-bind:comptasks='tasks' /> 
  </div>`,
  data() {
    return {
      tasks: [
        { taskName: 'Task1', creator: 'Person1' },
        { taskName: 'Task2', creator: 'Person2' },
      ],
    }
  },
  components: {
    Sidenav,
    Contents,
  },
}
