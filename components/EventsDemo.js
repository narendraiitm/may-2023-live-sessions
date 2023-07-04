export default {
  template: `<div>
    I am the child
    <button @click="$emit('sendmessage', childMessage, 'Second message')"> Send Message </button>
    </div>`,

  data() {
    return {
      childMessage: 'Message from child',
    }
  },
}
