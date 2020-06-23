<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      dark
      color="#605c4a"
    >
      <v-list dense >
        <v-list-item link to="/home">  
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        
        <v-list-item link to="">
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#45443e"
      dark
    >
      <div class="d-flex align-center">
        <!--https://www.freepik.com/free-icon/light-bulb_941295.htm#page=1&query=idea&position=12-->
        <router-link to="/">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="../assets/idea.png" 
            transition="scale-transition"
            width="40"
            to="/"
          />
        </router-link>

        <router-link to="/">
          <v-img
            alt="Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
            to="hello"
          />
        </router-link>
      </div>

      <!-- ------------------- -->
      <v-spacer></v-spacer>
      <!-- ------------------- -->
        
      <!--<span class="nav-welcome">Hello, {{ user.name }}.</span>
      <button type="button" class="logoutButton" @click="logout">Log out</button>-->

        <v-btn
          small
          outlined
          color="#F3F348"
          class="ma-2"
          to="/auth"
          @click.native="isNew(false)"
        >
          Login
        </v-btn>

        <v-btn
          small
          color="#F3F348"
          to="/auth"
          @click.native="isNew(true)"
        >
          <div id="signup_btn">Sign Up</div>
        </v-btn>
      <!--</template>-->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#F3F348"></v-app-bar-nav-icon>



      <!-- TABS
      <template v-slot:extension>
        <v-tabs
          v-model="model"
          centered
          slider-color="yellow"
        >
          <v-tab>New</v-tab>
          <v-tab>Popular</v-tab>
          <v-tab>Chat</v-tab>
        </v-tabs>
      
      </template>
      -->


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
  data() {
    return {
      drawer: null,
    } 
  },
  methods: {
    isNew (isNewUser) {
      this.$store.dispatch('isNewUser', !isNewUser)
      },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },

};
</script>

<style>
  #signup_btn {
    color: #45443e
  };

  
</style>
