<template>
  <div class="wrapper">
    <template v-if="events !== 'Loading events...'">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
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

export default {
  name: "Home",
  components: {
    EventCard,
    //Ideapreview, 
  },
  data () {
    return { events: 'Loading events...' }
  },
  created () {
    axios.get('//localhost:8081/dashboard').then(({ data }) => {
      this.events = data.events
    })
  }
}
</script>

<style></style>