<template>
    <div>

        <IdeaFullSize v-bind:idea="this.idea"> </IdeaFullSize>

    </div>
</template>

<script>
import IdeaFullSize from "../components/IdeaFullSize.vue";
import axios from "axios";

export default {
    name: "Idea",
    components: {
        IdeaFullSize
    },
    data(){
        return {
             id: this.$route.params.id,
             idea: null
        }
    },
    created () {
        //get idea from ideaId
        axios.get(process.env.VUE_APP_API_URL +"/idea/id/" + this.id).then(({ data }) => {
            this.idea = data
        });
    }
}

</script>

<style scoped>

</style>