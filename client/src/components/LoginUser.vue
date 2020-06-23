<template>
  <div name="wrapper">
    <v-card class="mx-auto my-12" max-width="344" color="#5c6559" dark>
      <v-card-title>Login</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="username"
          label="Username/E-mail"
          placeholder="maxmustermann"
          outlined ></v-text-field>
      </v-card-text>

      <v-card-text>
        <v-text-field
          v-model="password"
          label="Password"
          placeholder="xxx"
          outlined ></v-text-field>
      </v-card-text>
      <p v-if="status === 400">Invalid login info.</p>

      <v-btn
          small
          outlined
          color="#F3F348"
          class="ma-2"
          to="/auth"
          @click="login"
        >
          Login
      </v-btn>
    </v-card>

  </div>
</template>

<script>
export default {
  name: 'LoginUser',
  data () {
    return {
      email: '',
      password: '',
      status: null
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => { this.$router.push({ name: 'Home' }) })
        .catch(err => { this.status = err.response.status })
    }
  }
}
</script>

<style>



</style>