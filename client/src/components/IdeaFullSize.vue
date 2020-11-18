<template>
    <div>

        <!--{{this.idea}}-->
        <v-card
            class="mx-auto my-3"
            max-width="344"
            color="#605C4A"
            dark
            >   
            
            <v-card-text >
                <!-- Idea Hashtags -->
                <div v-for="tag in idea.tags" :key="tag.i"> #{{tag}} </div>

                <!-- Idea Head -->
                <p class="display-1 text--primary" >  {{ idea.head }} </p>

                <!--  Creator Name  -->
                <p>{{idea.user.username}}</p>

                <!-- Idea Discription -->
                <div class="text--primary" >  {{idea.idea}} </div>

            </v-card-text>


            <v-card-actions>

                <!--  Upvote Button -->
                <div v-if="!isUpvoted && !isDownvoted">
                    <v-btn v-on:click="upvote(idea._id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted">
                    <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
                </div>
                    {{this.idea.upvotes + this.idea.downvotes}} 


                <!--  Downvote Button -->
                <div v-if="!isUpvoted && !isDownvoted ">
                    <v-btn v-on:click="downvote(idea._id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted">
                    <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
                </div>

                

                <div v-if="isAuthor">
                    <v-btn v-on:click="delt(idea._id)" icon> <v-icon>mdi-delete</v-icon> </v-btn>
                </div>
                
            </v-card-actions>
        </v-card>


        <div v-for="comment in comments" :key="comment._id"> 
            <CommentFullSize v-bind:comment="comment"></CommentFullSize>
            
        </div>
            
    </div>
</template>

<script>
import axios from "axios";
import CommentFullSize from "./CommentFullSize.vue"

export default {
    name: "IdeaFullSize",
    props: [
        "idea"
    ],
    components: {
        CommentFullSize
    },
    data() {
        return {
            isUpvoted: false,
            isDownvoted: false,
            comments: [
                {
                    _id: 1,
                    username: "trump",
                    userId: 42069,
                    timestamp: 1234567890,
                    comment: "The container used for placing actions for a card, such as v-btn or v-menu. Also applies special margin to buttons so that they properly line up with other card content areas.",
                    upvotes: 10,
                    downvotes: 5
                },
                {
                    _id: 2,
                    username: "trump1",
                    userId: 42069,
                    timestamp: 1234567890,
                    comment: "Provides a default font-size and padding for card subtitles. Font-size can be overwritten with typography classes",
                    upvotes: 16,
                    downvotes: 5
                },
                {
                    _id: 3,
                    username: "trump2",
                    userId: 42069,
                    timestamp: 1234567890,
                    comment: "Primarily used for text content in a card. Applies padding for text, reduces its font-size to .875rem.",
                    upvotes: 10,
                    downvotes: 13
                }
            ]
        }
    },
    methods:{
        upvote(postid){
            axios.put('//localhost:8081/posts/upvote/' + postid)
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                });
                //update der lokalen idea instanz! nicht dr server version!
                this.idea.upvotes += 1;
                this.isUpvoted = true;
            },
        downvote(postid){
            axios.put('//localhost:8081/posts/downvote/' + postid)
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
            //update der lokalen idea instanz! nicht dr server version!
            this.idea.downvotes -= 1;
            this.isDownvoted = true;
        },
        delt(postid) {
            axios.delete("//localhost:8081/posts/delete/" + postid)
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
            window.history.back();
        },
        isAuthor(){
             if(this.user.username == this.idea.user.username) {
                return true;
            } else {
                return false;
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.username;
        }
    }
    
}
</script>

<style scoped>

</style>