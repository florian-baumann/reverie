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
                <!-- Idea Hashtags -- v-if to avoid error-->
                <div v-if="idea.tags"> 
                    <div v-for="tag in idea.tags" :key="tag.i"> #{{tag}} </div>
                </div>

                <!-- Idea Head -->
                <p class="display-1 text--primary" >  {{ idea.head }} </p>

                <!--  Creator Name  -->
                <p>@{{idea.author.username}}</p>

                <!-- Idea Discription -->
                <div class="text--primary" >  {{idea.description}} </div>

            </v-card-text>


            <v-card-actions>

                <!--  Upvote Button -->
                <div v-if="!isUpvoted && !isDownvoted">
                    <v-btn v-on:click="upvote(idea.id)" icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-up</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted">
                    <v-btn icon> <v-icon>mdi-arrow-up-drop-circle</v-icon> </v-btn>
                </div>


                {{this.idea.userUpvotes.length - this.idea.userDownvotes.length}} <!-- summary votes -->


                <!--  Downvote Button -->
                <div v-if="!isUpvoted && !isDownvoted ">
                    <v-btn v-on:click="downvote(idea.id)" icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isUpvoted"><!-- only disabled the function call-->
                    <v-btn icon> <v-icon>mdi-menu-down</v-icon> </v-btn>
                </div>
                <div v-if="isDownvoted">
                    <v-btn icon> <v-icon>mdi-arrow-down-drop-circle</v-icon> </v-btn>
                </div>


                <!-- comment Button + Dialog-->
                <v-dialog v-model="dialog" persistent max-width="600px" >

                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-comment-outline</v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title>
                        <span>New Comment</span>
                        </v-card-title>

                        <v-card-text>
                            <v-textarea
                                rows= "2"
                                outlined
                                v-model="newComment"
                                placeholder="... comment ..."
                            ></v-textarea>
                        </v-card-text>

                        <v-card-actions>

                        <v-spacer></v-spacer>

                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false; sendNewComment()"
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>


                <v-spacer></v-spacer>
                

                <!-- delete button -->
                <div v-if="isAuthor">
                    <v-btn v-on:click="delt(idea.id)" icon> <v-icon>mdi-delete</v-icon> </v-btn>
                </div>
                
            </v-card-actions>
        </v-card>


        <div v-for="comment in this.idea.comments" :key="comment.id"> 
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
            dialog: false,
            newComment: "",
        }
    },
    methods:{
        upvote(postid){
            axios.put(process.env.VUE_APP_API_URL + "/idea/" + postid + "/upvote")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                });
            //update der lokalen idea instanz! nicht dr server version!
            //this.upvotes += 1;
            this.idea.userUpvotes.push("locally");
            this.isUpvoted = true;
        },
        downvote(postid){
            axios.put(process.env.VUE_APP_API_URL + "/idea/" + postid + "/downvote")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
        //update der lokalen idea instanz! nicht dr server version!
        //this.downvotes -= 1;
        this.idea.userDownsvotes.push("locally")
        this.isDownvoted = true;
        },
        delt(postid) {
            axios.delete(process.env.VUE_APP_API_URL + "/idea/" + postid + "/delete")
                .then(({ res }) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
            });
            window.history.back();
        },
        sendNewComment() {
            var newComment = {
                "comment": this.newComment,
            }

            const json = JSON.stringify({ newComment });

            axios.post(process.env.VUE_APP_API_URL + "/comment/" + this.idea.id + "/new", json, {
                headers: {
                // Overwrite Axios's automatically set Content-Type
                'content-Type': 'application/json'
                }
            })
            .then(({res}) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            });
        }
        
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        isAuthor() {
             if(this.user.id === this.idea.author._id) {
                return true;
            } else {
                return false;
            }
        },
        // upvotes() {
        //     return this.idea.userUpvotes.length
            
        // },
        // downvotes() {
        //     return this.idea.userDownvotes.length
        // }

    }
    
}
</script>

<style scoped>

</style>