<template>
  <div class="wrapper" >
    <v-container >
        <v-row id="topRow" >




            <v-col id="textCol" lg="5" >
                <v-row id="titleRow" >
                    <div >
                        make the World <br> 
                        a better place
                    </div>
                </v-row>
                <v-row id="descriptionRow" align="end">
                    <div >
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        No, if you’ve made it this far, congratulations! You already have a firm understanding of how Vuetify’s
                        grid system works and should make the documentation much more easier to understand. 
                        However, there are still a few other features I’d like to show you before you venture off into the wild.<br>
                        <v-btn color="#FADC00" rounded> Register </v-btn>
                    </div>
                </v-row>
            </v-col>




            <v-col id="imageCol" lg="7" >
                <v-row >
                    <v-img :src="require('../assets/frontpage.png')"  contain height="800" />
                </v-row>
            </v-col>
        </v-row>


        <div :style="{'background-image':'//assets/backgroundGradient.png'}">
        <v-row id="bottomRow">
            <v-col md="3">
                Twitter link
            </v-col>

            <v-col md="3">
                Support
            </v-col>

            <v-col md="3">
                drei daily user
            </v-col>

            <v-col md="3">
                Impressum
            </v-col>

        </v-row>
        </div>

        <p>
        server: {{idea}}
        </p>
    </v-container>
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

<style>

.wrapper {
   background-color: #c7c1a6;
 }



#titleRow {
    font-size: 70px;
    color: #45443E
}

#descriptionRow {
    font-size: 20px;
    color: #FADC00
}

#bottomRow {
    color: #FFFFFF;
    font-size: 20px;
}



</style>