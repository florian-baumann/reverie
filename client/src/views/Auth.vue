<template>
  <div name="wrapper">

    flexibel:
    <!--<component :is="loginOrSignup" />-->

    fest:
    <LoginUser/>
    <SignupUser/>
    
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
  data() {
    return {
      username: "",
      password: "",
    }
  },
  computed: {
    //isNewUser () {
    //  return this.$store.state.isNewUser
    //},
    //loginOrSignup () {
    //  return this.isNewUser ? 'LoginUser' : 'SignupUser'
    //}
  }
}
</script>

<style>



</style>