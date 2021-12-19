<template>
  <div>
    <v-btn class="ma-5 green white--text" @click="goBack()"
      >Retourner à l'accueil</v-btn
    >
    <div id="content">
      <h1>Ma maison</h1>
      <v-img src="../assets/house.jpeg" class="illustration"></v-img>
      <h2>Mes informations : </h2>
      <p>Adresse : 8 Rue Léonard de Vinci, 45100 Orléans</p>
      <p>Contact : maisoninterg-orleans@bienchezmoi.com</p>
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

<style>
#content{
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
p{
  margin: 2%;
}
</style>