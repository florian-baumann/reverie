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

      <v-btn icon><v-icon >mdi-menu-up</v-icon></v-btn>
      {{(idea.upvotes - idea.downvotes)}}
      <v-btn icon><v-icon >mdi-menu-down</v-icon></v-btn>

      <v-btn
        text
        color="#FFFFFF"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "IdeaCard",
    props: {
      idea: {
        type: Object,
        default: () => ({})
      }
    },
    methods:{
      upvote(){

      },
      downvote(){
        
      }
    }
    
}
</script>

<style scoped>

</style>