<template>
<div>
    <v-card
    class="mx-auto my-3"
    max-width="344"
    color="#605C4A"
    dark
    >

        <v-card-title class="white--text mt-8">
            <v-avatar size="56">
                <img alt="user" src="../assets/head.jpeg" >
            </v-avatar>
            <p class="ml-3">
                @ {{user.username}}
            </p>
            {{user.karma}}
        </v-card-title>

        <v-tabs v-model="tab"
        background-color="transparent"
        color="basil"
        grow
        >

            <v-tab>
                Ideas
            </v-tab>
            <v-tab-item>
                
                    <IdeaCard v-for="idea in ideas" :key="idea.id" :idea="idea" />
                
            </v-tab-item>


            <v-tab>
                Upvotes
            </v-tab>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>...coming soon ...</v-card-text>
                </v-card>
            </v-tab-item>


            <v-tab>
                About
            </v-tab>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>...coming soon ...</v-card-text>
                </v-card>
            </v-tab-item>
        
        </v-tabs>




    </v-card>
</div>
</template>

<script>
import axios from "axios";
import IdeaCard from "../components/IdeaCard.vue";

export default {
    name: "My",
    components: {
        IdeaCard
    },
    data() {
        return {
            tab: 0,
            ideas: [],
        }
    },
    
    created () {
        axios.get("//localhost:8081/allideas/" + this.user.username).then(({ data }) => {
        this.ideas = data
        });
    },
    computed: {
        user () {
            return this.$store.state.user;
        },
        
    }

    
}
</script>


<style scoped>

</style>