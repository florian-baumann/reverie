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

      <v-btn
          small
          outlined
          color="#F3F348"
          class="ma-2"
          to="/auth"
          
        >
          Login
        </v-btn>

      <!-- <div class="" >not registered? <a href="xxx">Register</a></div> -->


    </v-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  }
}
</script>

<style>



</style>