<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex v-for="card in cards" :key="card" xs4>
        <v-card class="ma-2" outlined tile>
    <v-img
      :src= "card.image"
      contain
      height="200px"
    ></v-img>
    <v-card-title> {{ card.title }}</v-card-title>
    <v-card-subtitle> {{card.subtitle}} </v-card-subtitle>
  </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import GroupbuyListItem from "@/components/groupbuy/GroupbuyListItem.vue";
export default {
  // components: { GroupbuyListItem },
  data() {
    return {
      cards: [
        {
          image: "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
          title: "asdfasdf",
          subtitle: "community",
          value: "community",
        },
        {
          image: "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
          title: "asdfasdf",
          subtitle: "community",
          value: "community",
        },
        {
          image: "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
          title: "asdfasdf",
          subtitle: "community",
          value: "community",
        },
        {
          image: "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
          title: "asdfasdf",
          subtitle: "community",
          value: "community",
        },
      ],
    };
  },
};
</script>

<style>
</style>