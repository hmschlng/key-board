<template>
  <v-card id="boardTab">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold ma-5 white--text">
        {{ tabs[tab] }}
      </h1>
    </v-card-title>
    <v-row id="tabLine">
      <v-spacer />
      <v-col :cols="mainWidth" class="pa-0">
        <v-tabs v-model="tab" grow background-color="transparent" color="primary">
          <v-tab
            v-for="(tab, index) in tabs"
            :key="index"
            @click="clickTab(index)"
            style="border: 1px solid gainsboro"
            class="white--text"
            active-class="primary darken-1"
          >
            {{ tab }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-spacer />
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BoardHeader",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      tab: this.$store.state.boardStore.categoryTab,
      tabs: ["정보 공유", "질문 게시판"],
    };
  },
  methods: {
    ...mapMutations("boardStore", ["SET_CATEGORY_TAB", "SET_KEYWORD", "SET_PGNO"]),
    clickTab(selectedTab) {
      this.tab = selectedTab;
      this.SET_CATEGORY_TAB(this.tab);
      this.SET_KEYWORD(null);
      this.SET_PGNO(1);
      this.$router.go();
    },
  },
};
</script>

<style>
#boardTab {
  background-image: url("@/assets/community.png");
  background-size: cover;
}
#tabLine{
  background-color: rgb(0,0,0,0.5);
}
</style>
