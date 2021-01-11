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
      <p class="display-1 text--primary" >  {{ idea.head }} </p>

      <!--  Creator Name  -->
      <p>{{idea.author.username}}</p>

      <!-- Idea Discription -->
      <div class="text--primary" >  {{idea.description}} </div>

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
      };
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
      }
    },
    // computed: {
    //   // upvotes() {
    //   //       return this.idea.userUpvotes.length
            
    //   //   },
    //   //   downvotes() {
    //   //       return this.idea.userDownvotes.length
    //   //   }
    // }
    
    
}
</script>

<style scoped>

</style>