<template>
  <div class="wrapper pa-6">
    <v-row>
      
    </v-row >
    <v-row >
      
    </v-row>

    <p>
      server: {{idea}}
    </p>


    
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Hello",
  data(){
    return {
      idea: null
    }
  },
  created () {
        //get idea from ideaId
        axios.get(process.env.VUE_APP_API_URL +"/").then(({ data }) => {
            this.idea = data
        });
    }
}
</script>

<style></style>