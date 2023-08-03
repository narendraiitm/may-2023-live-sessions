export default {
  template: `<div><button @click="loginUser">Login {{$profileName}}</button></div>`,
  methods: {
    loginUser() {
      console.log('send a request to verify the user')
      this.$router.push({
        name: 'profile',
        params: { id: this.id }, // path parameters
        query: { state: 'UP' }, // query parameters
      })
    },
  },
  data() {
    return {
      $profileName: 'Narendra',
      id: 5,
    }
  },
}
