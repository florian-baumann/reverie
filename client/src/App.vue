<template>
  <div id="app" class="wrapper" style="background-color:green">
    <NavBar></Navbar>
    
  </div>
</template>

<script>
import NavBar from "./views/NavBar.vue"

export default {
  name: 'app',
  components:{
    NavBar,
  }
}


</script>

<style>
 #app {
   background-color: #c7c1a6;
 }
</style>
