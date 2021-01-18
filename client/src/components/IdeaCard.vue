<template>
  <v-card
    class="mx-auto my-3"
    max-width="344"
    color="#605C4A"
    dark
    >
    
    <v-card-text >
      <!-- Idea Hashtags -->
      <div v-for="tag in idea.tags" :key="tag.i"> #{{tag}} </div>

      <!-- Idea Head -->
      <p class="display-1 text--primary" >  {{ short_head }} </p>

      <!--  Creator Name  -->
      <p>@{{idea.author.username}}</p>    

      <!-- Idea Discription -->
      <div class="text--primary" >  {{ short_description }} </div>

    </v-card-text>


    <v-card-actions>

      <!--  Upvote Button -->
      <div v-if="!isUpvoted && !isDownvoted">
        <v-btn v-on:click="upvote(idea.id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
      </div>
      <div v-if="isDownvoted"><!-- only disabled the function call-->
        <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
      </div>
      <div v-if="isUpvoted">
        <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
      </div>


      {{this.idea.userUpvotes.length - this.idea.userDownvotes.length}} <!-- summary votes -->


      <!--  Downvote Button -->
      <div v-if="!isUpvoted && !isDownvoted ">
        <v-btn v-on:click="downvote(idea.id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>
      <div v-if="isUpvoted"><!-- only disabled the function call-->
        <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>
      <div v-if="isDownvoted">
        <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
      </div>


      <!-- comment Button -->
      <v-btn icon :to="{name: 'Idea', params: {id: idea.id}}">
        <v-badge :content="idea.comments.length" color="#45443E" overlap dark>
          <v-icon>mdi-comment-outline</v-icon>
        </v-badge>
      </v-btn>
        

      <!--  Read More Button -->
      <v-btn
        text
        color="#FFFFFF"
        :to="{name: 'Idea', params: {id: idea.id}}"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
    name: "IdeaCard",
    props: {
      idea: {
        type: Object,
        default: () => ({})
      }
     

    },
    data (){
      return{
        isUpvoted: false,
        isDownvoted: false,
      }
    },
    methods:{
      upvote(postId){
        axios.put(process.env.VUE_APP_API_URL + "/idea/" + postId + "/upvote")
          .then(({ res }) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
        });
        //update der lokalen idea instanz! nicht dr server version!
        //this.upvotes += 1;
        this.idea.userUpvotes.push("locally");
        this.isUpvoted = true;
        },
      downvote(postId){
        axios.put(process.env.VUE_APP_API_URL + "/idea/" + postId + "/downvote")
          .then(({ res }) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
        });
      //update der lokalen idea instanz! nicht dr server version!
      //this.downvotes -= 1;
      this.idea.userDownvotes.push("locally");
      this.isDownvoted = true;
      },


      
    },
  computed: {
    short_head: function() {
      if(this.idea.head.length > 42) {
        return this.idea.head.substr(0, 42) + "..."
      } else {
        return this.idea.head;
      }
      
    },
    short_description: function() {
      if(this.idea.description.length> 200) {
        return this.idea.description.substr(0, 200) + "..."
      } else {
        return this.idea.description;
      }
    }, 
  },

  mounted() {    
    if(this.idea.userDownvotes.length > 0) {
      for(var i = 0; i < this.idea.userDownvotes.length; i++) {
        if(this.idea.userDownvotes[i].username == this.$store.state.user.username ) {
          this.isDownvoted = true;
        }
      }
    }
    if(this.idea.userUpvotes.length > 0) {
      for(var x = 0; x < this.idea.userUpvotes.length; x++) {
        if(this.idea.userUpvotes[x].username == this.$store.state.user.username ) {
          this.isUpvoted = true;
        }
      }
    }   
  }
     
    
}
</script>

<style scoped>

</style>