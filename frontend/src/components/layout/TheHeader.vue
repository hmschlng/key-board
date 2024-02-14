<template>
  <v-app-bar app clipped-left fixed style="z-index: 2">
    <!-- 홈 버튼 아이콘 + 서비스 제목 -->
    <router-link :to="{ name: 'main' }">
      <v-row align="center">
        <v-toolbar-title default class="ml-3 text-h4 font-weight-bold">KEY</v-toolbar-title>
        <v-icon x-large class="mx-1">mdi-keyboard-variant</v-icon>
        <v-toolbar-title default class="text-h4 font-weight-bold">BOARD</v-toolbar-title>
      </v-row>
    </router-link>

    <v-spacer></v-spacer>

    <!-- 메뉴 -->
    <v-btn
      v-for="menu in menus"
      :key="menu.link"
      text
      @click="clickMenu(menu.link)"
    >
      {{ menu.value }}
    </v-btn>
    <v-spacer></v-spacer>

   <!-- 프로필 -->
    <div v-if="!logined">
      <v-btn text :to="{ name: 'login' }"> sign-in | sign-up </v-btn>
    </div>
    <div v-else>
      <v-avatar size="32">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="transparent" elevation="0" v-bind="attrs" v-on="on"
            >
            {{ user.nickname }} 
            
            님</v-btn
          >
        </template>
        <v-list>
          <v-list-item>
            <v-row>
              <v-col>
                <v-avatar size="36">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col>
                <v-list-item-title class="text-h6 mt-2 mr-3">
                  {{user.nickname}}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ user.email }}
                  </v-list-item-subtitle>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
        <v-divider class="grey"></v-divider>
        <v-list>
          <v-list-item
            v-for="(item, index) in mypage"
            :key="index"
            class="justify-space-around"
          >
            <v-icon>mdi-{{ item.icon }}</v-icon>
            <v-btn :to="{ name: item.link }" text> {{ item.value }}</v-btn>
          </v-list-item>
          <v-list-item class="justify-space-around">
            <v-icon>mdi-account-arrow-right-outline</v-icon>
            <v-btn @click="logout" text>logout</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "TheHeader",
  computed: {
    ...mapState("memberStore", ["logined", "user"])
  },
  data() {
    return {
      user: this.$store.state.memberStore.user,
      // login: false,
      menus: [
      {
          link: "community",
          value: "community",
        },
        {
          link: "groupbuy",
          value: "group-buy",
        },
      ],
      mypage: [
        {
          link: "myinfo",
          value: "My Info",
          icon: "account",
        },
        {
          link: "wishlist",
          value: "Wishlist",
          icon: "cards-heart",
        },
        {
          link: "mycommunity",
          value: "My Articles",
          icon: "pencil-box-multiple",
        },
        {
          link: "notice",
          value: "Notice",
          icon: "bullhorn",
        },
        {
          link: "helpcenter",
          value: "Help Center",
          icon: "face-agent",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("boardStore", [
      "SET_CATEGORY_TAB",
      "SET_KEYWORD",
      "SET_PGNO",
    ]),
    ...mapMutations("memberStore", ["SET_USER", "SET_LOGINED"]),
    clickMenu(link) {
      if (link === "community") {
        this.SET_CATEGORY_TAB(0);
        this.SET_KEYWORD(null);
        this.SET_PGNO(1);
      }
      this.$router.push({
        name: link,
      });
    },
    logout() {
      this.SET_USER(null);
      this.SET_LOGINED(false);
      this.login = false;
      this.$router.push({ name: "main" });
    },
  },
 
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a > div {
  color: black;
}
</style>
