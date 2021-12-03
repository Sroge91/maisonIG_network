<template>
  <nav id="navbar">
    <v-app-bar app flat color="green" clipped-right clipped-left>
      <v-spacer></v-spacer>
      <v-img src="../assets/fond_blanc.png" style="max-width:50px" class="mr-3"></v-img>
      <h1 style="font-weight: normal; font-size:20px">
        <router-link to="/" style="color: whitesmoke; text-decoration:none;">Bien chez moi</router-link>
      </h1>
      <v-spacer />
      <router-link to="/" v-if="$store.state.status=='connected'" class="white--text" style="font-size:17px; text-decoration: none;">Utilisateur : {{ $store.state.userInfos.prenom }} {{ $store.state.userInfos.nom }}</router-link>
    </v-app-bar>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      jour: 0,
      mois: 0,
      annee: 0,
      heure: 0,
      minute: 0,
      ticker: ":",

      interval: {},
    };
  },
  computed:{
   ...mapState(['user'])
  },
  mounted(){
    var now = new Date();

    this.jour = now.getDay();
    this.mois = now.getMonth();
    this.annee = now.getFullYear();
    this.heure = now.getHours();
    this.minute = now.getMinutes();

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      now = new Date();
      this.jour = now.getDay();
      this.mois = now.getMonth();
      this.annee = now.getFullYear();
      this.heure = now.getHours();
      this.minute = now.getMinutes();
      if(this.ticker ==":"){
        this.ticker = " "
      }
      else{
        this.ticker=":"
      }

      if (this.minute<10) {this.minute = "0" + this.minute}
      if (this.heure<10) {this.heure = "0" + this.heure}
        
    }, 1000);
  }
};
</script>

<style scoped>
* {
  color: whitesmoke;
}
</style>
