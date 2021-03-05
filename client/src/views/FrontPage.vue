<template>
    <v-app >
        <div id="backg">
            <v-container fluid>
                <v-row class="mx-10">




                    <v-col lg="5" >
                        <v-row>
                            <div class="text-h2  font-weight-medium my-15 heading" >
                                make the World <br> 
                                a better place
                            </div>
                        </v-row>

                        <v-row>
                            <div class="text-h5 mt-15 pr-16 description">
                                No, if you’ve made it this far, congratulations! You already have a firm understanding of how Vuetify’s
                                grid system works and should make the documentation much more easier to understand. 
                                However, there are still a few other features I’d like to show you before you venture off into the wild.<br>
                            </div>   
                        </v-row>

                        <v-row > 
                            <v-col class="text-right pr-16 ">
                                <v-btn color="#FADC00" class="justify-end "  rounded> Login </v-btn>
                                <v-btn color="#FADC00" class="justify-end mx-4" rounded> Register </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>




                    <v-col id="imageCol" lg="7" class="pl-5" >
                        <v-row >
                            <v-img :src="require('../assets/frontpage.png')"  contain height="800" />
                        </v-row>
                    </v-col>
                </v-row>


                <v-row >
                    <v-col md="3 text-center" >
                        <div class="white--text text-h6"> 
                            Twitter link
                        </div>
                    </v-col>

                    <v-col md="3 text-center">
                        <div class="white--text text-h6">
                            Support
                        </div>
                    </v-col>

                    <v-col md="3 text-center">
                        <div class="white--text text-h6">
                            Lorem
                        </div>
                    </v-col>

                    <v-col md="3 text-center">
                        <div class="white--text text-h6">
                            Impressum
                        </div>
                    </v-col>

                </v-row>
                

                <p>
                server: {{idea}}
                </p>
            </v-container>
        </div>
    </v-app>
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
    //background-image: radial-gradient(circle, rgba(69,68,62,1) 00%, rgba(0,0,0,0) 20%);
}



</script>

<style scoped>

#backg {
    background-color: #c7c1a6;
    background-image: linear-gradient(0deg, rgba(69,68,62,1) 0%, rgba(199,193,166,1) 20%);
}

.heading {
    color: #45443e;
}

.description {
    color: #45443e;
}



</style>