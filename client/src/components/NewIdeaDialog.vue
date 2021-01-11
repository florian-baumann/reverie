<!-- https://next.vuetifyjs.com/en/components/dialogs/-->
<template>
  <div class="wrapper">
      <v-card max-width="auto"  color="#778d7a">
        <v-card-title>Publish your new Idea !</v-card-title>
        
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col > <!-- cols="12" sm="6" md="4"  -->
                        <v-text-field
                            label="Head"
                            v-model="heading"
                            counter="42" :maxlength="42"
                            required
                         ></v-text-field>
                    </v-col>
                </v-row>


                 <!-- <v-divider></v-divider> ---------------------------------------- -->


                <v-row>
                    <v-col cols="12" sm="9"> <!-- cols="12" sm="6" -->
                        <v-text-field
                            v-model="newHashtag"
                            label="add some tags"
                            counter="20" maxlength="20"
                            required
                        ></v-text-field>
                    </v-col>
                    
                    <v-col col="12" sm="3">
                        <v-btn class="my-7" rounded small @click="addHashtag()">+</v-btn>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-chip-group column>
                        <v-chip v-for="(hashtag, index) in hashtags" :key="index" close @click:close="deleteHashtag(index)"> 
                            
                            #{{hashtag}}</v-chip>
                    </v-chip-group>
                    <!--<div >{{hashtag }} <v-btn @click="deleteHashtag(index)">x</v-btn></div> -->
                </v-row>


                 <!-- <v-divider></v-divider> ---------------------------------------- -->


                <v-row class="mt-3">
                    <v-textarea
                        outlined
                        name="input-7-4"
                        label="Description"
                        v-model="description"
                        placeholder="... "
                    ></v-textarea>
                </v-row>

            </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close')"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            title
            @click="sendData(); $emit('close')"
          >
            Save
          </v-btn>
        </v-card-actions>

      </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "NewIdeasDialog",
  components: {
    
  },
  data() {
    return {
        heading:"",
        newHashtag: "",
        hashtags: [],
        description: "",
        
    } 
  },
  methods: {
    addHashtag() {
        if(this.newHashtag){
            this.hashtags.push(this.newHashtag);
            this.newHashtag = "";
        }
    },
    deleteHashtag(index) {
        this.hashtags.splice(index,1);
    },
    sendData() {
        var newIdea = {
            "id": null,
            "user": { "username": this.$store.state.user.username, "id": 5,},
            "tags": this.hashtags,
            "link": null,
            "head": this.heading,
            "idea": this.description,
            "upvotes": 0,
            "downvotes": 0,
            "comments": [ ]
        };
        //!!! check ob alles existiert/richtige länge hat

        //glaube das kann man sich sparen und der custom header -- macht axios automatisch
        const json = JSON.stringify({ newIdea });

        axios.post(process.env.VUE_APP_API_URL + '/idea/new', json, {
                headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
                }
        })
        .then(({ res }) => {
            console.log(res);
        },
        (err) => {
            console.log(err);
        });
    }, 
  },
}
</script>

<style></style>