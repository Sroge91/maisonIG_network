<template>
  <v-form id="form">
    <v-card class="pb-5 mx-auto">
      <v-card-title> Connectez-vous </v-card-title>
      <div id="input">
        <v-row>
          <label class="black--text">Email : </label>
          <input type="email" required v-model="emailInput" />
        </v-row>
        <v-row>
          <label class="black--text">Mot de passe : </label>
          <input type="password" required v-model="passwordInput" />
        </v-row>
        <v-row>
          <v-btn class="mt-5 mx-5 green white--text" @click="handleSubmit"
            >Se connecter</v-btn
          >
        </v-row>
      </div>
    </v-card>
  </v-form>
</template>

<script>

export default {
  data() {
    return {
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted");
      this.login();
    },
    login() {
      this.$store.dispatch("login", {
        email: this.emailInput,
        password: this.passwordInput,
      });
    },
  },
};
</script>

<style scoped>
#form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 420px;
  margin-left: 33%;
  margin-top: 5%;
}
#input {
  padding: 10%;
}
input {
  display: inline-block;
  padding: 5px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
label {
  padding: 10px 10px;
}
</style>