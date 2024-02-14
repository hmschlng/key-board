<template>
  <v-footer dark padless>
    <v-card flat tile class="grey lighten-3 grey--text text-center" width="100%">
      <v-row>
        <v-spacer />
        <v-col :cols="mainWidth">
          <v-row align="center" class="ma-4">
            <v-toolbar-title default>KEY</v-toolbar-title>
            <v-icon large color="grey" class="mx-1">mdi-keyboard-variant</v-icon>
            <v-toolbar-title default>BOARD</v-toolbar-title>
          </v-row>
          <v-divider class="grey lighten-2"></v-divider>
          <v-simple-table class="grey lighten-3 grey--text ma-2">
            <tr v-for="info in infos" :key="info.title">
              <th class="text-left">{{ info.title }}</th>
              <td class="text-left">{{ info.contents }}</td>
            </tr>
          </v-simple-table>
          <v-divider class="grey lighten-2"></v-divider>

          <v-card-text class="grey--text"> <strong>kt ds ㅡ We:DuS {{ new Date().getFullYear() }}</strong> </v-card-text>
        </v-col>
        <v-spacer />
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      // icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      infos: [
      {
          title: "사원명",
          contents: "이방환",
        },
        {
          title: "소속사명",
          contents: "(주)케이티디에스",
        },
        {
          title: "사업자등록번호",
          contents: "117-82-65799",
        },
        {
          title: "주소",
          contents: "서울 서초구 효령로 176 201, 202호",
        },
        {
          title: "대표번호",
          contents: "02-523-7029",
        },
      ],
    };
  },
};
</script>

<style></style>
