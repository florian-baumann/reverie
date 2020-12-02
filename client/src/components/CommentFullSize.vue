<template>
    <div>

        <!--{{this.comment}}-->
        <v-card
            class="mx-auto my-3"
            max-width="344"
            color="#605C4A"
            dark
            >   
            
            <v-card-text >
                <!--  Creator Name  -->
                <p>{{comment.username}}</p>

                <!-- Comment-->
                <div class="text--primary" >  {{comment.comment}} </div>

            </v-card-text>


            <v-card-actions>

                <!--  Upvote Button -->
                <div v-if="!isUpvoted && !isDownvoted">
                    <v-btn v-on:click="upvote(comment._id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted">
                    <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
                </div>
                    {{this.comment.upvotes + this.comment.downvotes}} 


                <!--  Downvote Button -->
                <div v-if="!isUpvoted && !isDownvoted ">
                    <v-btn v-on:click="downvote(comment._id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted">
                    <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
                </div>
                
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CommentFullSize",
    props: [
        "comment"
    ],
    data() {
        return {
            isUpvoted: false,
            isDownvoted: false
        }
    },
    methods:{
        upvote(commentId){
            axios.put("//localhost:8081/comment/" + commentId + "/upvote")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                });
                //update local comment instance
                this.comment.upvotes += 1;
                this.isUpvoted = true;
            },
        downvote(commentId){
            axios.put("//localhost:8081/comment/" + commentId + "/downvote")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
            //update local comment instance
            this.comment.downvotes -= 1;
            this.isDownvoted = true;

        }
    }
    
}
</script>

<style scoped>

</style>