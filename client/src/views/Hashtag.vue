<template>
    <v-container fluid class="mt-2">
        helo
        
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "Hashtags",
    components: {
        
    },
    data() {
        return {
            tab: 0,
            ideas: [],
        }
    },
    
    created () {
        //get all ideas from hashtag
        axios.get(process.env.VUE_APP_API_URL + "/idea/user/me").then(({ data }) => {
        this.ideas = data;
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