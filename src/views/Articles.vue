<template>
  <div>
      <v-btn class="ma-5 pa-8 green white--text" @click="goBack()">
      <v-img
        src="../assets/goBack_arrow.png"
        style="height: 60px; width: 60px"
      ></v-img>
    </v-btn>
    
    <div id="article">
      <h1>{{ article.title }}</h1>
      <p class="date">Publié le {{ date }} par {{article.author}}</p>
      <p>
        <img
          :src="`http://localhost:8055/assets/` + article.image"
          alt="illustration"
          class="illustration"
        />
      </p>
      <p id="content"></p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Product",
  props: ["id"],
  data() {
    return {
      article: [],
      date: "",
    };
  },
  mounted() {
    this.getArticle(this.id);
  },
  methods: {
    getArticle(id) {
      axios({
        method: "get",
        url: "http://localhost:8055/items/Articles/" + id,
      }).then((response) => {
        this.article = response.data.data;
        document.getElementById("content").innerHTML = this.article.content;
        this.date = this.displayDateArticle(this.article.date_created)
      });
    },
    displayDateArticle(date_article) {
      let date_publication = "";
      let d = new Date(date_article);

      //console.log(date_article)

      const indexDay = date_article.indexOf("T")-2;
      date_publication = date_article[indexDay] + date_article[indexDay+1] + " "

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
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#article {
  margin-left: 20%;
  margin-right: 20%;
}
h1 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.illustration {
  display: block;
  float: left;
  margin: auto;
  margin-right: 20px;
  max-height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
p {
  margin: 20px;
  text-align: justify;
}
#article .date {
  color: #757575;
}
</style>