<template>
  <v-card tile>
    <v-navigation-drawer
      app
      permanent
      floating
      right
      clipped
      color="#EEEEEE"
      width="25%"
      style="border-radius:10px;"
    >
      <div class="ma-5">
        <h2 class="black--text" style="font-size: 22px; font-weight: normal">
          Messages
        </h2>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title" class="item">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-html="item.title"
                  style="color: black"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Gauthier Ferec",
        subtitle: `Je serais dans le coin ce week-end, on s'organise une sortie ?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Clément Ortiz",
        subtitle: `J'aurais aimé participé à la randonnée du week-end dernier mais j'étais occupé.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Emma Marly",
        subtitle: "Comment se passe la vie à la maison ?",
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Léa Durier",
        subtitle: `Tu as une idée de cadeau pour Gauthier? J'ai pensé à un voyage en Russie.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Émilie Pasquet",
        subtitle:
          "Ce soir je cuisine un chili con carne, que faites-vous ce soir ?",
      },
    ],
  }),
};
</script>

<style scoped>
.item:hover {
  background-color: #b9f6ca;
  cursor: pointer;
}

.item{
  border-radius: 10px;
}
</style>