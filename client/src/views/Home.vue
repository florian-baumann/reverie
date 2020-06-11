<template>
  <div class="wrapper">
    <HelloWorld/>
    <Ideapreview/>
    <Ideapreview/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue"
import Ideapreview from "../components/idea-preview.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
    Ideapreview,
  }
}
</script>

<style></style>