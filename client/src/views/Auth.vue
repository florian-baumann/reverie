<template>
  <div name="wrapper">

    <component :is="loginOrRegister" />
    
   
    
  </div>
</template>

<script>
import LoginUser from "../components/LoginUser.vue"
import SignupUser from "../components/SignupUser.vue"

export default {
  components: {
    LoginUser,
    SignupUser
  },
  computed: {
    isNewUser () {
      return this.$store.state.isNewUser
    },
    loginOrRegister () {
      return this.isNewUser ? 'LoginUser' : 'SignupUser'
    }
  },
  methods: {
    toggleComponent () {
      this.$store.dispatch('isNewUser', !this.isNewUser)
    }
  }
}
</script>

<style>



</style>