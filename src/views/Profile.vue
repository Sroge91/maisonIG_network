<template>
  <div>
    <v-btn class="ma-5 green white--text" @click="goBack()"
      >Retourner à l'accueil</v-btn
    >
    <div id="content">
      <h1>Mon profil</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#content {
  margin-left: 20%;
  margin-right: 20%;
}
.illustration {
  display: block;
  float: left;
  margin-left: 20px;
  margin-right: 20px;
  max-height: 300px;
  max-width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
p {
  margin: 2%;
}
</style>