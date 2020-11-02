<template>
  <v-card
    class="mx-auto my-3"
    max-width="344"
    color="#605C4A"
    dark
  >
    <v-card-text >
      <div v-for="tag in idea.tags" :key="tag.i"> #{{tag}}</div>
      <p class="display-1 text--primary" >
        {{ idea.head }}
      </p>

      <p>{{idea.user.full_name}}</p>

      <div class="text--primary" > 
        {{idea.idea}}
      </div>

    </v-card-text>


    <v-card-actions>

      <div v-if="!isUpvoted && !isDownvoted">
        <v-btn v-on:click="upvote(idea.id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
      </div>
      <div v-if="isDownvoted"><!-- only disabled the function call-->
        <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
      </div>
      <div v-if="isUpvoted">
        <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
      </div>
        {{this.idea.upvotes - this.idea.downvotes}} 

      <div v-if="!isUpvoted && !isDownvoted ">
        <v-btn v-on:click="downvote(idea.id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>
      <div v-if="isUpvoted"><!-- only disabled the function call-->
        <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>
      <div v-if="isDownvoted">
        <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
      </div>
        
      <!--<div v-else>
        <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>

        {{this.idea.upvotes - this.idea.downvotes}} 

        <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
      </div>-->

      <v-btn
        text
        color="#FFFFFF"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios' 

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
        isDownvoted: false
      };
    },
    methods:{
      upvote(postid){
        axios.post('//localhost:8081/posts/upvote/' + postid)
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
      downvote(postid){
        axios.post('//localhost:8081/posts/downvote/' + postid)
          .then(({ res }) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
        });
      //update der lokalen idea instanz! nicht dr server version!
      this.idea.downvotes += 1;
      this.isDownvoted = true;

      }
    }
    
}
</script>

<style scoped>

</style>