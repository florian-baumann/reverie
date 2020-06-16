<template>
  <div name="wrapper">
    <v-card class="mx-auto" max-width="344" color="#5c6559" dark>
      <form @submit.prevent="register">

        <v-card-title>Register</v-card-title>


        <v-card-text>
          <v-text-field
            v-model="name"
            label="name"
            placeholder="maxmustermann"
            outlined ></v-text-field>
        </v-card-text>
        {{this.name}}

        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            placeholder="xxx@xxx"
            outlined ></v-text-field>
        </v-card-text>
        {{this.email}}

        <v-card-text>
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="xxx"
            outlined ></v-text-field>
        </v-card-text>
        {{this.password}}

        <v-card-actions>
          <v-btn
            small
            outlined
            color="#F3F348"
            class="ma-2 justify-center"
            to="/auth"
           @click="register"
          > <!--@click.native="isNew(false)"-->
            Register
          </v-btn>
        </v-card-actions>

      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Home" })
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  }
}
</script>

<style>



</style>