<template>
  <div>
    <v-btn class="ma-5 green white--text" @click="goBack()"
      >Retourner à l'accueil</v-btn
    >
    <h1>Mon profil</h1>
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
</style>