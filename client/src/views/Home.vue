<template>
  <div class="wrapper"> 

    

    <template v-if="ideas !== 'Loading ideas...'">
      <IdeaCard v-for="idea in ideas" :key="idea.id" :idea="idea" />
    </template>


    
    <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
            
            color="#605C4A"
    ></v-pagination> 

  
  
  
  
  
  </div>
</template>



<script>
import axios from "axios";
import IdeaCard from "../components/IdeaCard.vue";


export default {
  name: "Home",
  components: {
    IdeaCard,
    
  },

  data () {
    return {
      ideas: "Loading ideas...",
      idea: [],

      page: 1,
      totalPages: 0,
      pageSize: 3,
    }
  },

  methods: {
    getRequestParams(page, pageSize) {
      let params = {};
      if (page) {
        params["page"] = page - 1;
      }
      if (pageSize) {
        params["size"] = pageSize;
      }
      return params;
    },

    retrieveIdeas() {
      const params = this.getRequestParams(
        this.page,
        this.pageSize
      );

      axios.get(process.env.VUE_APP_API_URL + "/idea/feedpag", {params}).then((response) => {
        
          this.ideas = response.data.data.docs;
          this.totalPages = response.data.data.totalPages;

          //console.log(response.data.data.docs);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    handlePageChange(value) {
      this.page = value;
      this.retrieveIdeas();
    },

    handlePageSizeChange(size) {
      this.pageSize = size;
      this.page = 1;
      this.retrieveIdeas();
    },
    refreshList() {
      this.retrieveIdeas();
    },


  },
  created () {
    this.retrieveIdeas();
    // axios.get("//localhost:8081/idea/feedpag", {params}).then(({ data }) => {
    //   this.ideas = data
    // });
  }
}
</script>

<style>

</style>