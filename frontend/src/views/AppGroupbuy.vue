<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <the-banner></the-banner>
        <groupbuy-list></groupbuy-list>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>


<script>
import TheBanner from "@/components/layout/TheBanner";
import GroupbuyList from "@/components/groupbuy/GroupbuyList.vue";

export default {
  name: "AppNews",
  components: {
    TheBanner,
    GroupbuyList
  },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
    };
  },
};
</script>

<style>
</style>