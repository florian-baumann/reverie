<template>
  <div name="wrapper">
    <v-card class="mx-auto" max-width="344" color="#5c6559" dark>
      <form @submit.prevent="register">

        <v-card-title>Register</v-card-title>


        <v-card-text>
          <v-text-field
            v-model="username"
            label="username"
            placeholder="maxmustermann"
            outlined ></v-text-field>
        </v-card-text>

        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            placeholder="xxx@xxx"
            outlined ></v-text-field>
        </v-card-text>

        <v-card-text>
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="xxx"
            outlined ></v-text-field>
        </v-card-text>
        <p v-if="status === 400">Please enter different info.</p>


        <v-card-actions>
          <v-btn
            small
            outlined
            color="#F3F348"
            class="ma-2 justify-center"
            to="/auth"
           @click="register"
          >
            Register
          </v-btn>
           <a
      v-show="!isNewUser"
      class="auth-link"
      @click="toggleComponent"
    >Already have an account? Login.</a>
        </v-card-actions>

      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SignupUser",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      status: null
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch('register', {     //TODO: fehlt die role. server braucht role zum registrieren
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Home" })
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
    toggleComponent () {
      this.$store.dispatch('isNewUser', !this.isNewUser)
    }
  },
  computed: {
    isNewUser () {
      return this.$store.state.isNewUser
    },
  }
}
</script>

<style>



</style>