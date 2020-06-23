<template>
  <div class="wrapper">
    <template v-if="!isLoading">
      <EventCard v-for="events in events" :key="events.id" :idea="events" />
    </template>
    <p v-else>
      Loading events
    </p>
    feste:
    <Ideapreview/>
    <Ideapreview/>
  </div>
</template>

<script>
import axios from 'axios' 
import Ideapreview from "../components/idea-preview.vue"
import EventCard from "../components/EventCard.vue"

export default {
  name: "Home",
  components: {
    EventCard,
    Ideapreview, 
  },
  data () {
    return { events: 'Loading events...' }
  },
  created () {
    axios.get('//localhost:3000/dashboard').then(({ data }) => {
      this.events = data.events.events
    })
  }
}
</script>

<style></style>