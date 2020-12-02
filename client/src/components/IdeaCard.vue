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
      <p>{{idea.user.username}}</p>

      <!-- Idea Discription -->
      <div class="text--primary" >  {{idea.idea}} </div>

    </v-card-text>


    <v-card-actions>

      <!--  Upvote Button -->
      <div v-if="!isUpvoted && !isDownvoted">
        <v-btn v-on:click="upvote(idea._id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
      </div>
      <div v-if="isDownvoted"><!-- only disabled the function call-->
        <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
      </div>
      <div v-if="isUpvoted">
        <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
      </div>
        {{this.idea.upvotes + this.idea.downvotes}} 


      <!--  Downvote Button -->
      <div v-if="!isUpvoted && !isDownvoted ">
        <v-btn v-on:click="downvote(idea._id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>
      <div v-if="isUpvoted"><!-- only disabled the function call-->
        <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>
      <div v-if="isDownvoted">
        <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
      </div>


      <!-- comment Button -->
      <v-btn icon :to="{name: 'Idea', params: {id: idea._id}}">
        <v-badge :content="idea.comments.length" color="#45443E" overlap dark>
          <v-icon>mdi-comment-outline</v-icon>
        </v-badge>
      </v-btn>
        

      <!--  Read More Button -->
      <v-btn
        text
        color="#FFFFFF"
        :to="{name: 'Idea', params: {id: idea._id}}"
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
        axios.put("//localhost:8081/idea/" + postId + "/upvote")
          .then(({ res }) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
        });
        //update der lokalen idea instanz! nicht dr server version!
        this.idea.upvotes += 1;
        this.isUpvoted = true;
        },
      downvote(postId){
        axios.put("//localhost:8081/idea/" + postId + "/downvote")
          .then(({ res }) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
        });
      //update der lokalen idea instanz! nicht dr server version!
      this.idea.downvotes -= 1;
      this.isDownvoted = true;
      }
    },
    
    
}
</script>

<style scoped>

</style>