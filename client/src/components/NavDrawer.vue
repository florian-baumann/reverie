<template>
<!-- List eöements change color after click like normal links -
>need to be disalbed somehow--> 
<div> 
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      dark
      color="#605c4a"
    >
    
    <v-list>
      <v-list-item two-line link to="/my" >  
          <v-list-item-avatar>
          <img src="../assets/head.jpeg">
          </v-list-item-avatar>

          <v-list-item-content>
          <v-list-item-title>@{{user.username}}</v-list-item-title>
          <v-list-item-subtitle>{{user.karma}}</v-list-item-subtitle>
          </v-list-item-content>
          
      </v-list-item>
    </v-list>

    <v-divider></v-divider>


      <v-list dense >
        <v-list-item link to="/home">  
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        
        

        <v-list-item link to="/values">
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-lightbulb-on-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Values</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


<!--
        <v-list-item link to="/values">
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-tools</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Toolbox -> github 3d drucker adoe ...</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

-->

        <v-list-item link to="/contact">
          <v-list-item-action>
            <v-icon color="#F3F348">mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>

    
      <template v-slot:append v-if="user">
        <div class="pa-2" >
          <v-list-item link to="/" @click="logout">
            <v-list-item-action>
                <v-icon color="#F3F348">mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </div>
      </template>
      <template v-slot:append v-else>
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



    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    name: "NavDrawer",
    props: [
        "drawer"
    ],
    data() {
        return {
            drawe: false,
        }
    },
    methods: {
        logout () {
            this.$store.dispatch('logout')
        }
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    },
    
}
</script>

<style scoped>

</style>