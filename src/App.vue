<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view v-if="$store.state.status == 'connected'" />
      <SignUpForm v-else @loginSuccess="userLogged"/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SignUpForm from "./components/SignUpForm.vue"

export default {
  components: { Navbar, SignUpForm},
  name: "App",

  data: () => ({
  }),
  methods: {
  },
};
</script>