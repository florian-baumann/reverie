<template>
  <v-app>
    
    <NavDrawer v-bind:drawer="this.drawer"> </NavDrawer>
    

    <v-app-bar
      app
      color="#45443e"
      dark
    >
      <div class="d-flex align-center">
        <!--https://www.freepik.com/free-icon/light-bulb_941295.htm#page=1&query=idea&position=12-->
        <router-link to="/home">
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

        <h1>reverie.</h1>
          
      </div>

      <!-- ------------------- -->
      <v-spacer></v-spacer>
      <!-- ------------------- -->

     
      
      <template v-if="!user">
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
      </template>

      <div v-if= user >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#F3F348"></v-app-bar-nav-icon>
      </div>

    </v-app-bar>

    <v-content>
      <router-view></router-view> <!-- Content -->   

      
    </v-content> 

    <!-- new Idea Button-->
    <div v-if= user >
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            color="#F3F348"
            bottom
            right
            fixed
            v-bind="attrs"
            v-on="on"
            @click="dialog = !dialog"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn> 
        </template>

        <NewIdeaDialog @close="changedialog"></NewIdeaDialog>
      </v-dialog>
    </div>
      
            
   
  </v-app>
</template>

<script>
import NewIdeaDialog from "../components/NewIdeaDialog.vue"
import NavDrawer from "../components/NavDrawer.vue"

export default {
  name: 'App',
  components: {
    NewIdeaDialog,
    NavDrawer    
  },
  data() {
    return {
      dialog: false,
      drawer:false
    } 
  },
  methods: {
    isNew (isNewUser) {
      this.$store.dispatch('isNewUser', !isNewUser)
      },
    changedialog () {
      this.dialog = false
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
