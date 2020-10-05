<template>
  <div class="wrapper">
    <template v-if="events !== 'Loading events...'">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <IdeaCard v-for="idea in ideas" :key="idea.id" :idea="idea" />
    </template>

    
    
    <!--feste:
    <Ideapreview/>
    <Ideapreview/>-->
  </div>
</template>

<script>
import axios from 'axios' 
//import Ideapreview from "../components/idea-preview.vue"
import EventCard from "../components/EventCard.vue"
import IdeaCard from "../components/IdeaCard.vue"

export default {
  name: "Home",
  components: {
    EventCard,
    IdeaCard
    //Ideapreview, 
  },
  data () {
    return { 
      events: 'Loading events...',
      ideas: "Loading ideas..."
      }
  },
  created () {
    axios.get('//localhost:8081/dashboard').then(({ data }) => {
      this.events = data.events
    });
    axios.get('//localhost:8081/allideas').then(({ data }) => {
      this.ideas = data
    });
  }
}
</script>

<style></style>