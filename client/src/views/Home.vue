<template>
  <div class="wrapper"> 
    <template v-if="ideas !== 'Loading ideas...'">
      <IdeaCard v-for="idea in ideas" :key="idea.id" :idea="idea" />
    </template>

    <!--
    <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
          ></v-pagination> -->
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
    axios.get('//localhost:8081/idea/feed').then(({ data }) => {
      this.ideas = data
    });
  }
}
</script>

<style></style>