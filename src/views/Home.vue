<template>
  <v-container>
    <LeftDrawer />
    <Discussion />
    <h1>Actualités</h1>
    <div v-for="article in articles" :key="article.id">
      <div class="article" @click="showArticle(article.id)">
        <img
          :src="projectURL + article.image"
          alt="image de l'article"
          class="illustration_article"
        />
        <h2 class="title">{{ article.title }}</h2>
        <p class="date">{{ displayDateArticle(article.date_created) }}</p>
        <p class="content">{{ article.resume }}</p>
      </div>
    </div>
  </v-container>
</template>

<script>
import Discussion from "../components/Discussion.vue";
import LeftDrawer from "../components/LeftDrawer.vue";
const axios = require("axios");

export default {
  components: { Discussion, LeftDrawer },
  name: "Home",
  data() {
    return {
      articles: [],
      projectURL: "http://localhost:8055/assets/",
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios({
        method: "get",
        url: "http://localhost:8055/items/Articles",
      }).then((response) => {
        this.articles = response.data.data;
        console.log(response);
        console.log(this.articles);
        this.sortArticles();
      });
      
    },

    sortArticles() {
      this.articles.sort(function (a, b) {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      console.log("TEST" + this.articles[0].id)
    },
    showArticle: function (id) {
      this.$router.push({ name: "Article", params: { id: id } });
    },
    displayDateArticle(date_article) {
      let date_publication = "";
      let d = new Date(date_article);

      date_publication = d.getDay().toString() + " ";

      switch (d.getMonth()) {
        case 0:
          date_publication += "janvier ";
          break;
        case 1:
          date_publication += "février ";
          break;
        case 2:
          date_publication += "mars ";
          break;
        case 3:
          date_publication += "avril ";
          break;
        case 4:
          date_publication += "mai ";
          break;
        case 5:
          date_publication += "juin ";
          break;
        case 6:
          date_publication += "juillet ";
          break;
        case 7:
          date_publication += "août ";
          break;
        case 8:
          date_publication += "septembre ";
          break;
        case 9:
          date_publication += "octobre ";
          break;
        case 10:
          date_publication += "novembre ";
          break;
        case 11:
          date_publication += "décembre ";
          break;
        default:
          date_publication += "/" + d.getMonth().toString() + "/";
          break;
      }

      date_publication += d.getFullYear();

      return date_publication;
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}

h1 {
  font-weight: normal;
}

.article {
  background-color: #f0f0f0;
  padding: 3%;
  border-radius: 10px;
  margin: 20px;
  min-height: 160px;
}

a {
  text-decoration: none;
}

.illustration_article {
  max-width: 200px;
  height: auto;
  display: block;
  float: left;
  margin-right: 10px;
  border-radius: 10px;
}

.article:hover {
  background-color: #b9f6ca;
  cursor: pointer;
}

.article:active {
  background-color: white;
}
.article .title {
  margin-left: 1%;
}
.article .date {
  color: #757575;
}
.article .content {
  margin-left: 1%;
}
</style>
