<template>
  <v-main id="appMain">
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-overlay z-index="0">
      <v-col align="center">
        <div class="text-h6 font-weight-bold">키보드가 궁금한 그대를 위한 커뮤니티</div>
        <div class="text-h1 font-weight-bold">Key Board</div>
        <v-btn :to="{ name: 'community' }" color="primary" class="ma-8 font-weight-bold" x-large>
          시작하기
        </v-btn>
      </v-col>
    </v-overlay>
  </v-main>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: fill;
}
</style>