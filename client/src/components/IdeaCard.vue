<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Headline</v-list-item-title>
        <v-list-item-subtitle> Content - Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
     </v-list-item>

    <v-card-actions>
      <v-btn text>upvote</v-btn>
      <v-btn text>downvote</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "IdeaCard",
    props: {

    },
    
}
</script>

<style scoped>

</style>