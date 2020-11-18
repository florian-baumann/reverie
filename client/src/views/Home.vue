<template>
  <div class="wrapper"> 
    <template v-if="ideas !== 'Loading ideas...'">
      <IdeaCard v-for="idea in ideas" :key="idea.id" :idea="idea" />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import IdeaCard from "../components/IdeaCard.vue";

export default {
  name: "Home",
  components: {
    IdeaCard
  },
  data () {
    return {
      ideas: "Loading ideas..."
      }
  },
  created () {
    axios.get('//localhost:8081/allideas').then(({ data }) => {
      this.ideas = data
    });
  }
}
</script>

<style></style>