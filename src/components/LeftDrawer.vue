<template>
    <v-navigation-drawer app permanent left clipped width="15%">
      <div @click="showCalendar()">
        <img src="../assets/calendar_icon.png" alt="Calendrier" class="icon" />
        <h2>Mon calendrier</h2>
      </div>
      <div @click="showMyHouse()">
        <img src="../assets/house_icon.png" alt="Ma maison" class="icon" />
        <h2>Ma maison</h2>
      </div>
      <!-- <div @click="showHouse()">
        <img
          src="../assets/loupe_icon.png"
          alt="Chercher une autre maison"
          class="icon"
        />
        <h2>Chercher une autre maison</h2>
      </div> -->
      <div @click="showMyProfile()">
        <img src="../assets/profile_icon.png" alt="Mon profil" class="icon" />
        <h2>Mon profil</h2>
      </div>

      <v-footer fixed>Copyright 2021 - Bien chez moi</v-footer>
    </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    showCalendar() {
      this.$router.push("/calendar");
    },
    showMyHouse() {
      this.$router.push("/myHouse");
    },
    showHouse() {
      this.$router.push("/searchHouse");
    },
    showMyProfile() {
      this.$router.push("/me");
    },
  },
};
</script>

<style scoped>
footer {
  font-size: 12px;
}
div{
  margin-top: 30px;
}
h2 {
  text-align: center;
  font-weight: normal;
  font-size: 17px;
}
.icon {
  height: 90px;
  width: 90px;
  text-align: center;
  display: block;
  margin: auto;
}

.icon:hover {
  height: 110px;
  width: 110px;
  background-color: #f0f0f0;
  border-radius: 40px;
  cursor: pointer;
}
</style>