export default {
  template: `<div> Login Form
  <input type='email' placeholder='email' v-model='credential.email' />
  <input type='password' placeholder='password' v-model='credential.password' />
  <button @click='loginUser'> Login </button>
  </div>`,

  data() {
    return {
      credential: {
        email: null,
        password: null,
      },
    }
  },

  methods: {
    loginUser() {
      fetch('/login?include_auth_token', {
        method: 'POST',
        body: JSON.stringify(this.credential),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data.response.user.authentication_token)
          localStorage.setItem(
            'auth_token',
            data.response.user.authentication_token
          )
        })
    },
  },
}
