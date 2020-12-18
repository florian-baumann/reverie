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
                <p>{{comment.author.username}}</p>

                <!-- Comment-->
                <div class="text--primary" >  {{comment.comment}} </div>

            </v-card-text>


            <v-card-actions>

                <!--  Upvote Button -->
                <div v-if="!isUpvoted && !isDownvoted">
                    <v-btn v-on:click="upvote(comment.id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted">
                    <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
                </div>


                    {{this.comment.userUpvotes.length - this.comment.userDownvotes.length}} <!-- summary votes -->


                <!--  Downvote Button -->
                <div v-if="!isUpvoted && !isDownvoted ">
                    <v-btn v-on:click="downvote(comment.id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted">
                    <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
                </div>


                <v-spacer></v-spacer>


                <!-- delete button -->
                <div v-if="isAuthor">
                    <v-btn v-on:click="delt(comment._id)" icon> <v-icon>mdi-delete</v-icon> </v-btn>
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
            isDownvoted: false,
            //upvotes: this.getUpvotes,
            //downvotes: this.getDownvotes
        }
    },
    methods:{
        upvote(commentId){
            axios.put(process.env.VUE_APP_API_URL + "/comment/" + commentId + "/upvote")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                });
            //update local comment instance
            //this.upvotes += 1;
            this.comment.userUpvotes.push("locally");
            this.isUpvoted = true;
        },
        downvote(commentId){
            axios.put(process.env.VUE_APP_API_URL + "/comment/" + commentId + "/downvote")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
            //update local comment instance
            //this.downvotes += 1;
            this.comment.userDownvotes.push("locally");
            this.isDownvoted = true;

        },
        delt(commentid) {
            axios.delete(process.env.VUE_APP_API_URL + "/comment/" + commentid + "/delete")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
            
        },
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        isAuthor() {
             if(this.user.id === this.comment.author) {
                return true;
            } else {
                return false;
            }
        },
    }
    
}
</script>

<style scoped>

</style>