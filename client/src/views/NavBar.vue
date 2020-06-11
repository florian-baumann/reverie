<template>
  <v-app>
    <v-app-bar
      app
      color="#45443e"
      dark
    >
      <div class="d-flex align-center">
        <!--https://www.freepik.com/free-icon/light-bulb_941295.htm#page=1&query=idea&position=12-->
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/idea.png" 
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        small
        outlined
        color="#F3F348"
        class="ma-2"
      >
        Login
      </v-btn>

      <v-btn
        small
        color="#F3F348"
      >
        <div id="signup_btn">Sign Up</div>
      </v-btn>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>


    <v-content>
      <router-view></router-view> <!-- Content -->
    </v-content> 
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  #signup_btn {
    color: #45443e
  }
</style>
