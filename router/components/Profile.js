export default {
  template: `<div> Profile Page of {{name}} with id {{id}}</div>`,
  data() {
    return { id: this.$route.params.id, name: this.$route.params.name }
  },
}
